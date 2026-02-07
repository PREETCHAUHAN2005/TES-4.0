import { useRef, useEffect } from "react";

/**
 * GoogleMap Component - Manus Platform Compatible
 *
 * Uses the Manus proxy for Google Maps API authentication
 * No API key required - authentication handled automatically
 * Displays venue location with custom styling and markers
 */

interface GoogleMapProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  markerTitle?: string;
  className?: string;
}

export default function GoogleMap({
  latitude = 36.1699,
  longitude = -115.1398,
  zoom = 15,
  markerTitle = "Abes Engineering College",
  className = "w-full h-full",
}: GoogleMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const marker = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);
  const infoWindow = useRef<google.maps.InfoWindow | null>(null);

  useEffect(() => {
    // Load Google Maps script via Manus proxy
    const loadMapScript = async () => {
      if (map.current) return; // Already loaded

      // Get API key from environment
      const apiKey = import.meta.env.VITE_FRONTEND_FORGE_API_KEY;
      const forgeBaseUrl =
        import.meta.env.VITE_FRONTEND_FORGE_API_URL ||
        "https://forge.butterfly-effect.dev";
      const mapsProxyUrl = `${forgeBaseUrl}/v1/maps/proxy`;

      // Create and load script
      const script = document.createElement("script");
      script.src = `${mapsProxyUrl}/maps/api/js?key=${apiKey}&v=weekly&libraries=marker`;
      script.async = true;
      script.crossOrigin = "anonymous";

      script.onload = () => {
        initializeMap();
        script.remove();
      };

      script.onerror = () => {
        console.error("Failed to load Google Maps script");
        script.remove();
      };

      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapContainer.current || !window.google) return;

      // Create map with dark theme styling
      map.current = new window.google.maps.Map(mapContainer.current, {
        center: { lat: latitude, lng: longitude },
        zoom: zoom,
        styles: [
          {
            elementType: "geometry",
            stylers: [{ color: "#1a1a1a" }],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#1a1a1a" }],
          },
          {
            elementType: "labels.text.fill",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#333333" }],
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#333333" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#666666" }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#444444" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#555555" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#333333" }],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#0a0a0a" }],
          },
        ],
        mapTypeControl: true,
        zoomControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
      });

      // Create advanced marker with custom styling
      if (window.google.maps.marker) {
        const pinElement = document.createElement("div");
        pinElement.innerHTML = `
          <div style="
            width: 32px;
            height: 32px;
            background-color: #FFFF00;
            border: 3px solid #000000;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            box-shadow: 0 2px 8px rgba(255, 255, 0, 0.4);
          ">
            📍
          </div>
        `;

        marker.current = new window.google.maps.marker.AdvancedMarkerElement({
          map: map.current,
          position: { lat: latitude, lng: longitude },
          title: markerTitle,
          content: pinElement,
        });
      }

      // Create info window
      infoWindow.current = new window.google.maps.InfoWindow({
        content: `
          <div style="color: #000; padding: 12px; font-family: 'Inter', sans-serif; max-width: 250px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold; font-size: 16px;">
              ${markerTitle}
            </h3>
            <p style="margin: 0 0 4px 0; font-size: 14px;">
            19th KM Stone, NH-09
            PIN - 201009

      </p>
            <p style="margin: 0 0 4px 0; font-size: 14px;">
              Ghaziabad,Uttar Pradesh
            </p>
            <p style="margin: 0 0 8px 0; font-size: 14px;">
              India
            </p>
            <p style="margin: 0; font-size: 13px; color: #666;">
              📞 +91 (897) 923-8942
            </p>
          </div>
        `,
        ariaLabel: markerTitle,
      });

      // Open info window on marker click
      if (marker.current) {
        marker.current.addListener("click", () => {
          infoWindow.current?.open(map.current, marker.current);
        });
      }

      // Open info window by default
      infoWindow.current.open(map.current, marker.current);

      // Handle window resize
      const handleResize = () => {
        if (map.current) {
          window.google.maps.event.trigger(map.current, "resize");
          map.current.setCenter({ lat: latitude, lng: longitude });
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };

    loadMapScript();
  }, [latitude, longitude, zoom, markerTitle]);

  return (
    <div
      ref={mapContainer}
      className={className}
      style={{
        borderRadius: "0.5rem",
        overflow: "hidden",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
      }}
    />
  );
}
