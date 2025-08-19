import phonenumbers
from phonenumbers import geocoder, carrier, timezone

# Replace this with your own number
phone_number = "+250 728 150 834"

# Parse the number
parsed_number = phonenumbers.parse(phone_number)

# Country / Region
country = geocoder.description_for_number(parsed_number, "en")

# Carrier (Telco)
telco = carrier.name_for_number(parsed_number, "en")

# Validity check
is_valid = phonenumbers.is_valid_number(parsed_number)
is_possible = phonenumbers.is_possible_number(parsed_number)

# Time zones
time_zones = timezone.time_zones_for_number(parsed_number)

print(" Country/Region:", country)
print(" Carrier:", telco)
print(" Valid number?:", is_valid)
print(" Possible number?:", is_possible)
print(" Time zone(s):", time_zones)
