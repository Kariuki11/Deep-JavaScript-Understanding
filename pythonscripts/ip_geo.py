import os, requests

# Optional: set a free token from ipinfo.io to raise limits:
# os.environ["IPINFO_TOKEN"] = "YOUR_TOKEN_HERE"

token = os.getenv("IPINFO_TOKEN")
url = "https://ipinfo.io/json" if not token else f"https://ipinfo.io/json?token={token}"

r = requests.get(url, timeout=10)
r.raise_for_status()
data = r.json()

print(f"IP: {data.get('ip')}")
print(f"City: {data.get('city')}")
print(f"Region: {data.get('region')}")
print(f"Country: {data.get('country')}")
print(f"Coordinates: {data.get('loc')}")  # "lat,lon"
print(f"Org/ISP: {data.get('org')}")
if data.get("loc"):
    lat, lon = data["loc"].split(",")
    print(f"Google Maps link: https://maps.google.com/?q={lat},{lon}")
