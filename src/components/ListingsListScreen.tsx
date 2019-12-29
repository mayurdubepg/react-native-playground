import {Listings} from '../model/Listing';
import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ListingItem from './ListingItem';

interface ListingsListProps {
  deals: Listings;
  onItemPress: any;
}

export default class ListingsListScreen extends Component {
  constructor(props: ListingsListProps) {
    super(props);
  }

  render() {
    console.log('a');
    return (
      <View style={styles.list}>
        <FlatList
          data={listings}
          renderItem={({item}) => (
            <ListingItem listing={item} onPress={this.props.onItemPress} />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
  },
});

const listings = [
  {
    "id": 22175486,
    "statusCode": "ACT",
    "daysUntilExpire": 33,
    "sourceCode": null,
    "typeCode": "SALE",
    "typeText": "For Sale",
    "subTypeCode": null,
    "leaseTermCode": null,
    "leaseTermText": null,
    "featureCode": null,
    "accountTypeCode": "NORMAL",
    "accountSubTypeCode": null,
    "isPremiumAccount": true,
    "isPropertySpecialistListing": false,
    "isMobilePropertySpotlightListing": false,
    "isFeaturedListing": false,
    "isTransactorListing": false,
    "isCommercial": false,
    "hasFloorplans": true,
    "hasStream": false,
    "featuredBy": [],
    "localizedHeadline": null,
    "headlines": null,
    "localizedTitle": "475D Upper Serangoon Crescent",
    "titles": {
        "en": ""
    },
    "localizedDescription": "FOR SALES!\n\n--- UNIT DETAILS ---\n\n* High floor!\n* Newly MOP DBSS at Parkland!\n* Bright & Breezy\n* Nicely renovated, 3RM with balcony \n* Move in ready , minimalistic \n* 5 years old unit\n* Close connection to Hougang MRT / Hougang Mall\n* Eateries & Groceries are only few mins walk \n* Done up flooring by the owner\n* Just bring your luggage in \n* 1 min drive to KPE\n* Childcare Centre ( Star Tots Playgroup )\n* Sheltered basement + multi storey carpark\n* Viewing By Appt \n\n\n====================================\n* 100% well kept by owner \n====================================\n\n\n\nLooking for a Dream Home of yours? ( BUY / SELL / RENT ) ,\ncall or sms us your criteria. Our team of committed agents are here to assist you.\n\nSeller looking to Sell , you can contact me for more details, pricing and information. EXPERIENCE THE DIFFERENCE, S.E.A DELIVERS RESULT!\n\nCall 9091 9441 for Viewing / details\n\nYuna Lim \nDistrict Director\nS.E.A Delivers Result\n\n****** No. 1 Top Producer ( 1st Position ) 2013/ 2014/ 2015 / 2016 / 2017 / 2018 ******",
    "descriptions": {
        "en": ""
    },
    "notes": null,
    "externalId": null,
    "cobroke": 0,
    "price": {
        "value": 468000,
        "pretty": "S$ 468,000",
        "periodCode": null,
        "pricePerArea": {
            "value": 649.0985,
            "unit": "sqft",
            "reference": "floorArea"
        },
        "type": {
            "code": null,
            "text": null,
            "pretty": null
        },
        "valuation": 0,
        "valuationText": null,
        "completed": 0,
        "currency": "SGD"
    },
    "sizes": {
        "bedrooms": {
            "value": 2,
            "text": "2 Bedrooms"
        },
        "bathrooms": {
            "value": 2,
            "text": "2 Bathrooms"
        },
        "extrarooms": {
            "value": null,
            "text": null
        },
        "floorArea": [
            {
                "unit": "sqft",
                "value": 721,
                "text": "721 sqft"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ],
        "floorX": null,
        "floorY": null,
        "landX": null,
        "landY": null
    },
    "pricePerArea": {
        "floorArea": [
            {
                "unit": "sqft",
                "value": 649.09847434119,
                "text": "S$ 649.10 psf"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ]
    },
    "dates": {
        "timezone": "Asia/Singapore",
        "firstPosted": {
            "date": "2019-12-29 16:04:06",
            "unix": 1577606646
        },
        "lastPosted": {
            "date": "2019-12-29 16:04:06",
            "unix": 1577606646
        },
        "expiry": {
            "date": "2020-01-30 23:59:59",
            "unix": 1580399999
        },
        "available": null
    },
    "urls": {
        "listing": {
            "api": "https://api.propertyguru.com/v1/listings/22175486?region=sg",
            "internal": "http://listing.guruestate.com/v1/listings/22175486?region=sg",
            "mobile": "https://www.propertyguru.com.sg/listing/hdb-for-sale-475d-upper-serangoon-crescent-22175486",
            "desktop": "https://www.propertyguru.com.sg/listing/hdb-for-sale-475d-upper-serangoon-crescent-22175486",
            "desktopByLocales": {
                "en": "https://www.propertyguru.com.sg/listing/hdb-for-sale-475d-upper-serangoon-crescent-22175486"
            },
            "preview": {
                "desktop": "https://www.propertyguru.com.sg/preview-listing/22175486"
            }
        }
    },
    "_user": null,
    "qualityScore": 100,
    "finalScore": 2078987882,
    "tier": 3,
    "showAgentProfile": true,
    "event": null,
    "agent": {
        "id": 60047,
        "name": "Yuna Lim",
        "mobile": "+6590919441",
        "mobilePretty": "+65 9091 9441",
        "showProfile": true
    },
    "agency": {
        "id": 5637,
        "name": "SINGAPORE ESTATE AGENCY PTE LTD",
        "ceaLicenseNumber": null
    },
    "property": {
        "id": 23497,
        "name": "475D Upper Serangoon Crescent",
        "typeCode": "HDB",
        "typeText": "HDB Apartment",
        "typeGroup": "H",
        "tenureCode": "L99",
        "tenureText": "99-year Leasehold",
        "topMonth": null,
        "topYear": 2014,
        "developer": "Housing & Development Board (HDB)"
    },
    "propertyUnit": {
        "furnishingCode": null,
        "furnishingText": null
    },
    "location": {
        "latitude": 1.3750713033114,
        "longitude": 103.90016040741,
        "distance": null,
        "regionCode": "G",
        "regionText": "Serangoon / Thomson (D19-20)",
        "regionSlug": "serangoon-thomson-d19-20",
        "districtCode": "D19",
        "districtText": "Hougang / Punggol / Sengkang",
        "districtSlug": "hougang-punggol-sengkang",
        "areaCode": null,
        "areaText": null,
        "areaSlug": null,
        "fullAddress": "475D Upper Serangoon Crescent",
        "hdbEstateCode": "12",
        "hdbEstateText": "Hougang"
    },
    "media": {
        "cover": {
            "id": 112887887,
            "caption": null,
            "statusCode": "ACT",
            "sortOrder": 1,
            "V150": "https://sg2-cdn.pgimgs.com/listing/22175486/UPHO.112887887.V150/475D-Upper-Serangoon-Crescent-Hougang-Punggol-Sengkang-Singapore.jpg",
            "V550": "https://sg2-cdn.pgimgs.com/listing/22175486/UPHO.112887887.V550/475D-Upper-Serangoon-Crescent-Hougang-Punggol-Sengkang-Singapore.jpg"
        },
        "listing": [],
        "property": null,
        "agent": "https://sg2-cdn.pgimgs.com/agent/60047/APHO.104794001.V120B.jpg",
        "agentLogo": [],
        "agencyLogo": [
            {
                "id": 65408171,
                "caption": null,
                "statusCode": "CONF",
                "sortOrder": 65408171,
                "V120": "https://sg2-cdn.pgimgs.com/agency/5637/CLOGO.65408171.V120.jpg"
            }
        ]
    },
    "tracking": {
        "refType": "tl3"
    },
    "isRankedSpotlight": false
},
{
    "id": 22026159,
    "statusCode": "ACT",
    "daysUntilExpire": 33,
    "sourceCode": null,
    "typeCode": "SALE",
    "typeText": "For Sale",
    "subTypeCode": null,
    "leaseTermCode": null,
    "leaseTermText": null,
    "featureCode": null,
    "accountTypeCode": "NORMAL",
    "accountSubTypeCode": null,
    "isPremiumAccount": true,
    "isPropertySpecialistListing": false,
    "isMobilePropertySpotlightListing": false,
    "isFeaturedListing": false,
    "isTransactorListing": false,
    "isCommercial": false,
    "hasFloorplans": true,
    "hasStream": false,
    "featuredBy": [],
    "localizedHeadline": null,
    "headlines": null,
    "localizedTitle": "588C Ang Mo Kio Street 52",
    "titles": {
        "en": ""
    },
    "localizedDescription": "FOR SALES!\n\n--- UNIT DETAILS ---\n\n* Renovated! \n* DBSS @ AMK Park Central \n* Very high floor!\n* Bright & Breezy\n* Eateries , Groceries & market are within 1min walk\n* Within 10 mins walk to Ang Mo Kio MRT & Hub\n* Convenient \n* Viewing By Appt \n* Open to all races!\n\n\n====================================\n* Mins walk to Ang Mo Kio MRT\n====================================\n\n\n\nLooking for a Dream Home of yours? ( BUY / SELL / RENT ) ,\ncall or sms us your criteria. Our team of committed agents are here to assist you.\n\nSeller looking to Sell , you can contact me for more details, pricing and information. EXPERIENCE THE DIFFERENCE, S.E.A DELIVERS RESULT!\n\nCall 9091 9441 for Viewing / details\n\nYuna Lim \nDistrict Director\nS.E.A Delivers Result\n\n****** No. 1 Top Producer ( 1st Position ) 2013/ 2014/ 2015 / 2016 / 2017 / 2018 ******",
    "descriptions": {
        "en": ""
    },
    "notes": null,
    "externalId": null,
    "cobroke": 0,
    "price": {
        "value": 728000,
        "pretty": "S$ 728,000",
        "periodCode": null,
        "pricePerArea": {
            "value": 751.29,
            "unit": "sqft",
            "reference": "floorArea"
        },
        "type": {
            "code": null,
            "text": null,
            "pretty": null
        },
        "valuation": 0,
        "valuationText": null,
        "completed": 0,
        "currency": "SGD"
    },
    "sizes": {
        "bedrooms": {
            "value": 3,
            "text": "3 Bedrooms"
        },
        "bathrooms": {
            "value": 2,
            "text": "2 Bathrooms"
        },
        "extrarooms": {
            "value": null,
            "text": null
        },
        "floorArea": [
            {
                "unit": "sqft",
                "value": 969,
                "text": "969 sqft"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ],
        "floorX": null,
        "floorY": null,
        "landX": null,
        "landY": null
    },
    "pricePerArea": {
        "floorArea": [
            {
                "unit": "sqft",
                "value": 751.28998968008,
                "text": "S$ 751.29 psf"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ]
    },
    "dates": {
        "timezone": "Asia/Singapore",
        "firstPosted": {
            "date": "2019-12-29 16:04:01",
            "unix": 1577606641
        },
        "lastPosted": {
            "date": "2019-12-29 16:04:01",
            "unix": 1577606641
        },
        "expiry": {
            "date": "2020-01-30 23:59:59",
            "unix": 1580399999
        },
        "available": null
    },
    "urls": {
        "listing": {
            "api": "https://api.propertyguru.com/v1/listings/22026159?region=sg",
            "internal": "http://listing.guruestate.com/v1/listings/22026159?region=sg",
            "mobile": "https://www.propertyguru.com.sg/listing/hdb-for-sale-588c-ang-mo-kio-street-52-22026159",
            "desktop": "https://www.propertyguru.com.sg/listing/hdb-for-sale-588c-ang-mo-kio-street-52-22026159",
            "desktopByLocales": {
                "en": "https://www.propertyguru.com.sg/listing/hdb-for-sale-588c-ang-mo-kio-street-52-22026159"
            },
            "preview": {
                "desktop": "https://www.propertyguru.com.sg/preview-listing/22026159"
            }
        }
    },
    "_user": null,
    "qualityScore": 100,
    "finalScore": 2078987879,
    "tier": 3,
    "showAgentProfile": true,
    "event": null,
    "agent": {
        "id": 60047,
        "name": "Yuna Lim",
        "mobile": "+6590919441",
        "mobilePretty": "+65 9091 9441",
        "showProfile": true
    },
    "agency": {
        "id": 5637,
        "name": "SINGAPORE ESTATE AGENCY PTE LTD",
        "ceaLicenseNumber": null
    },
    "property": {
        "id": 22264,
        "name": "588C Ang Mo Kio Street 52",
        "typeCode": "HDB",
        "typeText": "HDB Apartment",
        "typeGroup": "H",
        "tenureCode": "L99",
        "tenureText": "99-year Leasehold",
        "topMonth": null,
        "topYear": 2011,
        "developer": "Unknown Developer"
    },
    "propertyUnit": {
        "furnishingCode": null,
        "furnishingText": null
    },
    "location": {
        "latitude": 1.3718034820083,
        "longitude": 103.85354919378,
        "distance": null,
        "regionCode": "G",
        "regionText": "Serangoon / Thomson (D19-20)",
        "regionSlug": "serangoon-thomson-d19-20",
        "districtCode": "D20",
        "districtText": "Ang Mo Kio / Bishan / Thomson",
        "districtSlug": "ang-mo-kio-bishan-thomson",
        "areaCode": null,
        "areaText": null,
        "areaSlug": null,
        "fullAddress": "588C Ang Mo Kio Street 52",
        "hdbEstateCode": "1",
        "hdbEstateText": "Ang Mo Kio"
    },
    "media": {
        "cover": {
            "id": 111157392,
            "caption": null,
            "statusCode": "ACT",
            "sortOrder": 1,
            "V150": "https://sg1-cdn.pgimgs.com/listing/22026159/UPHO.111157392.V150/588C-Ang-Mo-Kio-Street-52-Ang-Mo-Kio-Bishan-Thomson-Singapore.jpg",
            "V550": "https://sg1-cdn.pgimgs.com/listing/22026159/UPHO.111157392.V550/588C-Ang-Mo-Kio-Street-52-Ang-Mo-Kio-Bishan-Thomson-Singapore.jpg"
        },
        "listing": [],
        "property": null,
        "agent": "https://sg2-cdn.pgimgs.com/agent/60047/APHO.104794001.V120B.jpg",
        "agentLogo": [],
        "agencyLogo": [
            {
                "id": 65408171,
                "caption": null,
                "statusCode": "CONF",
                "sortOrder": 65408171,
                "V120": "https://sg2-cdn.pgimgs.com/agency/5637/CLOGO.65408171.V120.jpg"
            }
        ]
    },
    "tracking": {
        "refType": "tl3"
    },
    "isRankedSpotlight": false
},
{
    "id": 22185189,
    "statusCode": "ACT",
    "daysUntilExpire": 33,
    "sourceCode": null,
    "typeCode": "SALE",
    "typeText": "For Sale",
    "subTypeCode": null,
    "leaseTermCode": null,
    "leaseTermText": null,
    "featureCode": null,
    "accountTypeCode": "NORMAL",
    "accountSubTypeCode": null,
    "isPremiumAccount": true,
    "isPropertySpecialistListing": false,
    "isMobilePropertySpotlightListing": false,
    "isFeaturedListing": false,
    "isTransactorListing": false,
    "isCommercial": false,
    "hasFloorplans": true,
    "hasStream": false,
    "featuredBy": [],
    "localizedHeadline": null,
    "headlines": null,
    "localizedTitle": "139A Lorong 1a Toa Payoh",
    "titles": {
        "en": ""
    },
    "localizedDescription": "FOR SALES!\n\n--- UNIT DETAILS ---\n\n* Very high floor!\n* Bright & Breezy\n* Super well kept!\n* Only 8 years old DBSS , The Peak @ Toa Payoh \n* A mere 6 mins walk to Toa Payoh MRT\n* Short stroll away to  HDB Hub, Wet Market & Hawker, NTUC Supermarket, Community Centre, Coffeeshop, clinics & etc \n\n====================================\n* Super well kept by owners \n====================================\n\n\n\nLooking for a Dream Home of yours? ( BUY / SELL / RENT ) ,\ncall or sms us your criteria. Our team of committed agents are here to assist you.\n\nSeller looking to Sell , you can contact me for more details, pricing and information. EXPERIENCE THE DIFFERENCE, S.E.A DELIVERS RESULT!\n\nCall 9091 9441 for Viewing / details\n\nYuna Lim \nDistrict Director\nS.E.A Delivers Result\n\n****** No. 1 Top Producer ( 1st Position ) 2013/ 2014/ 2015 / 2016 / 2017 / 2018 ******",
    "descriptions": {
        "en": ""
    },
    "notes": null,
    "externalId": null,
    "cobroke": 0,
    "price": {
        "value": 845000,
        "pretty": "S$ 845,000",
        "periodCode": null,
        "pricePerArea": {
            "value": 863.1256,
            "unit": "sqft",
            "reference": "floorArea"
        },
        "type": {
            "code": null,
            "text": null,
            "pretty": null
        },
        "valuation": 0,
        "valuationText": null,
        "completed": 0,
        "currency": "SGD"
    },
    "sizes": {
        "bedrooms": {
            "value": 3,
            "text": "3 Bedrooms"
        },
        "bathrooms": {
            "value": 2,
            "text": "2 Bathrooms"
        },
        "extrarooms": {
            "value": null,
            "text": null
        },
        "floorArea": [
            {
                "unit": "sqft",
                "value": 979,
                "text": "979 sqft"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ],
        "floorX": null,
        "floorY": null,
        "landX": null,
        "landY": null
    },
    "pricePerArea": {
        "floorArea": [
            {
                "unit": "sqft",
                "value": 863.12563840654,
                "text": "S$ 863.13 psf"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ]
    },
    "dates": {
        "timezone": "Asia/Singapore",
        "firstPosted": {
            "date": "2019-12-29 16:03:55",
            "unix": 1577606635
        },
        "lastPosted": {
            "date": "2019-12-29 16:03:55",
            "unix": 1577606635
        },
        "expiry": {
            "date": "2020-01-30 23:59:59",
            "unix": 1580399999
        },
        "available": null
    },
    "urls": {
        "listing": {
            "api": "https://api.propertyguru.com/v1/listings/22185189?region=sg",
            "internal": "http://listing.guruestate.com/v1/listings/22185189?region=sg",
            "mobile": "https://www.propertyguru.com.sg/listing/hdb-for-sale-139a-lorong-1a-toa-payoh-22185189",
            "desktop": "https://www.propertyguru.com.sg/listing/hdb-for-sale-139a-lorong-1a-toa-payoh-22185189",
            "desktopByLocales": {
                "en": "https://www.propertyguru.com.sg/listing/hdb-for-sale-139a-lorong-1a-toa-payoh-22185189"
            },
            "preview": {
                "desktop": "https://www.propertyguru.com.sg/preview-listing/22185189"
            }
        }
    },
    "_user": null,
    "qualityScore": 100,
    "finalScore": 2078987873,
    "tier": 3,
    "showAgentProfile": true,
    "event": null,
    "agent": {
        "id": 60047,
        "name": "Yuna Lim",
        "mobile": "+6590919441",
        "mobilePretty": "+65 9091 9441",
        "showProfile": true
    },
    "agency": {
        "id": 5637,
        "name": "SINGAPORE ESTATE AGENCY PTE LTD",
        "ceaLicenseNumber": null
    },
    "property": {
        "id": 23703,
        "name": "139A Lorong 1a Toa Payoh",
        "typeCode": "HDB",
        "typeText": "HDB Apartment",
        "typeGroup": "H",
        "tenureCode": "L99",
        "tenureText": "99-year Leasehold",
        "topMonth": null,
        "topYear": 2012,
        "developer": "HOI HUP SUNWAY J.V. PTE LTD"
    },
    "propertyUnit": {
        "furnishingCode": null,
        "furnishingText": null
    },
    "location": {
        "latitude": 1.336906,
        "longitude": 103.844662,
        "distance": null,
        "regionCode": "D",
        "regionText": "Balestier / Geylang (D12-14)",
        "regionSlug": "balestier-geylang-d12-14",
        "districtCode": "D12",
        "districtText": "Balestier / Toa Payoh",
        "districtSlug": "balestier-toa-payoh",
        "areaCode": null,
        "areaText": null,
        "areaSlug": null,
        "fullAddress": "139A Lorong 1A Toa Payoh",
        "hdbEstateCode": "25",
        "hdbEstateText": "Toa Payoh"
    },
    "media": {
        "cover": {
            "id": 113020278,
            "caption": null,
            "statusCode": "ACT",
            "sortOrder": 1,
            "V150": "https://sg1-cdn.pgimgs.com/listing/22185189/UPHO.113020278.V150/139A-Lorong-1a-Toa-Payoh-Balestier-Toa-Payoh-Singapore.jpg",
            "V550": "https://sg1-cdn.pgimgs.com/listing/22185189/UPHO.113020278.V550/139A-Lorong-1a-Toa-Payoh-Balestier-Toa-Payoh-Singapore.jpg"
        },
        "listing": [],
        "property": null,
        "agent": "https://sg2-cdn.pgimgs.com/agent/60047/APHO.104794001.V120B.jpg",
        "agentLogo": [],
        "agencyLogo": [
            {
                "id": 65408171,
                "caption": null,
                "statusCode": "CONF",
                "sortOrder": 65408171,
                "V120": "https://sg2-cdn.pgimgs.com/agency/5637/CLOGO.65408171.V120.jpg"
            }
        ]
    },
    "tracking": {
        "refType": "tl3"
    },
    "isRankedSpotlight": false
},
{
    "id": 22066620,
    "statusCode": "ACT",
    "daysUntilExpire": 33,
    "sourceCode": null,
    "typeCode": "SALE",
    "typeText": "For Sale",
    "subTypeCode": null,
    "leaseTermCode": null,
    "leaseTermText": null,
    "featureCode": null,
    "accountTypeCode": "NORMAL",
    "accountSubTypeCode": null,
    "isPremiumAccount": true,
    "isPropertySpecialistListing": true,
    "isMobilePropertySpotlightListing": false,
    "isFeaturedListing": false,
    "isTransactorListing": false,
    "isCommercial": false,
    "hasFloorplans": true,
    "hasStream": false,
    "featuredBy": [],
    "localizedHeadline": null,
    "headlines": null,
    "localizedTitle": "664A Punggol Drive",
    "titles": {
        "en": ""
    },
    "localizedDescription": "FOR SALES!\n\n--- UNIT DETAILS ---\n\n* Only 4 years old! Special approval to sell! \n* Nicely Renovated! \n* High floor!\n* Garden facing!\n* Bright & Breezy\n* 100% move in ready! \n* 2 Mins walk to Kadaloor LRT\n* Eateries & Groceries just opposite \n* Convenient \n* Viewing By Appt \n\n\n====================================\n* As goof as brand new!\n====================================\n\n\n\nLooking for a Dream Home of yours? ( BUY / SELL / RENT ) ,\ncall or sms us your criteria. Our team of committed agents are here to assist you.\n\nSeller looking to Sell , you can contact me for more details, pricing and information. EXPERIENCE THE DIFFERENCE, S.E.A DELIVERS RESULT!\n\nCall 9091 9441 for Viewing / details\n\nYuna Lim \nDistrict Director\nS.E.A Delivers Result\n\n****** No. 1 Top Producer ( 1st Position ) 2013/ 2014/ 2015 / 2016 / 2017 / 2018 ******",
    "descriptions": {
        "en": ""
    },
    "notes": null,
    "externalId": null,
    "cobroke": 0,
    "price": {
        "value": 568000,
        "pretty": "S$ 568,000",
        "periodCode": null,
        "pricePerArea": {
            "value": 479.7297,
            "unit": "sqft",
            "reference": "floorArea"
        },
        "type": {
            "code": null,
            "text": null,
            "pretty": null
        },
        "valuation": 0,
        "valuationText": null,
        "completed": 0,
        "currency": "SGD"
    },
    "sizes": {
        "bedrooms": {
            "value": 3,
            "text": "3 Bedrooms"
        },
        "bathrooms": {
            "value": 2,
            "text": "2 Bathrooms"
        },
        "extrarooms": {
            "value": null,
            "text": null
        },
        "floorArea": [
            {
                "unit": "sqft",
                "value": 1184,
                "text": "1184 sqft"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ],
        "floorX": null,
        "floorY": null,
        "landX": null,
        "landY": null
    },
    "pricePerArea": {
        "floorArea": [
            {
                "unit": "sqft",
                "value": 479.72972972973,
                "text": "S$ 479.73 psf"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ]
    },
    "dates": {
        "timezone": "Asia/Singapore",
        "firstPosted": {
            "date": "2019-12-29 16:03:44",
            "unix": 1577606624
        },
        "lastPosted": {
            "date": "2019-12-29 16:03:44",
            "unix": 1577606624
        },
        "expiry": {
            "date": "2020-01-30 23:59:59",
            "unix": 1580399999
        },
        "available": null
    },
    "urls": {
        "listing": {
            "api": "https://api.propertyguru.com/v1/listings/22066620?region=sg",
            "internal": "http://listing.guruestate.com/v1/listings/22066620?region=sg",
            "mobile": "https://www.propertyguru.com.sg/listing/hdb-for-sale-664a-punggol-drive-22066620",
            "desktop": "https://www.propertyguru.com.sg/listing/hdb-for-sale-664a-punggol-drive-22066620",
            "desktopByLocales": {
                "en": "https://www.propertyguru.com.sg/listing/hdb-for-sale-664a-punggol-drive-22066620"
            },
            "preview": {
                "desktop": "https://www.propertyguru.com.sg/preview-listing/22066620"
            }
        }
    },
    "_user": null,
    "qualityScore": 100,
    "finalScore": 2078987860,
    "tier": 3,
    "showAgentProfile": true,
    "event": null,
    "agent": {
        "id": 60047,
        "name": "Yuna Lim",
        "mobile": "+6590919441",
        "mobilePretty": "+65 9091 9441",
        "showProfile": true
    },
    "agency": {
        "id": 5637,
        "name": "SINGAPORE ESTATE AGENCY PTE LTD",
        "ceaLicenseNumber": null
    },
    "property": {
        "id": 22326,
        "name": "664A Punggol Drive",
        "typeCode": "HDB",
        "typeText": "HDB Apartment",
        "typeGroup": "H",
        "tenureCode": "L99",
        "tenureText": "99-year Leasehold",
        "topMonth": null,
        "topYear": 2015,
        "developer": "Housing & Development Board (HDB)"
    },
    "propertyUnit": {
        "furnishingCode": null,
        "furnishingText": null
    },
    "location": {
        "latitude": 1.3994654843449,
        "longitude": 103.91765387354,
        "distance": null,
        "regionCode": "G",
        "regionText": "Serangoon / Thomson (D19-20)",
        "regionSlug": "serangoon-thomson-d19-20",
        "districtCode": "D19",
        "districtText": "Hougang / Punggol / Sengkang",
        "districtSlug": "hougang-punggol-sengkang",
        "areaCode": null,
        "areaText": null,
        "areaSlug": null,
        "fullAddress": "664A Punggol Drive",
        "hdbEstateCode": "19",
        "hdbEstateText": "Punggol"
    },
    "media": {
        "cover": {
            "id": 111643936,
            "caption": null,
            "statusCode": "ACT",
            "sortOrder": 1,
            "V150": "https://sg1-cdn.pgimgs.com/listing/22066620/UPHO.111643936.V150/664A-Punggol-Drive-Hougang-Punggol-Sengkang-Singapore.jpg",
            "V550": "https://sg1-cdn.pgimgs.com/listing/22066620/UPHO.111643936.V550/664A-Punggol-Drive-Hougang-Punggol-Sengkang-Singapore.jpg"
        },
        "listing": [],
        "property": null,
        "agent": "https://sg2-cdn.pgimgs.com/agent/60047/APHO.104794001.V120B.jpg",
        "agentLogo": [],
        "agencyLogo": [
            {
                "id": 65408171,
                "caption": null,
                "statusCode": "CONF",
                "sortOrder": 65408171,
                "V120": "https://sg2-cdn.pgimgs.com/agency/5637/CLOGO.65408171.V120.jpg"
            }
        ]
    },
    "tracking": {
        "refType": "tl3"
    },
    "isRankedSpotlight": false
},
{
    "id": 22168175,
    "statusCode": "ACT",
    "daysUntilExpire": 33,
    "sourceCode": null,
    "typeCode": "SALE",
    "typeText": "For Sale",
    "subTypeCode": null,
    "leaseTermCode": null,
    "leaseTermText": null,
    "featureCode": null,
    "accountTypeCode": "NORMAL",
    "accountSubTypeCode": null,
    "isPremiumAccount": true,
    "isPropertySpecialistListing": true,
    "isMobilePropertySpotlightListing": false,
    "isFeaturedListing": false,
    "isTransactorListing": false,
    "isCommercial": false,
    "hasFloorplans": true,
    "hasStream": false,
    "featuredBy": [],
    "localizedHeadline": null,
    "headlines": null,
    "localizedTitle": "619A Punggol Drive",
    "titles": {
        "en": ""
    },
    "localizedDescription": "FOR SALES!\n\n--- UNIT DETAILS ---\n\n* High floor!\n* Renovated! \n* Bright & Breezy\n* Unblocked view\n* No noon sun !\n* 4rm premium blk With basement carpark\n* Oasis LRT &  terrace at doorstep \n* 2 LRT stop To Punggol MRT / Waterway Point\n* Eateries & Groceries just a short stroll away \n* Convenient \n* Viewing By Appt \n\n\n====================================\n* Nicely reno! \n====================================\n\n\n\nLooking for a Dream Home of yours? ( BUY / SELL / RENT ) ,\ncall or sms us your criteria. Our team of committed agents are here to assist you.\n\nSeller looking to Sell , you can contact me for more details, pricing and information. EXPERIENCE THE DIFFERENCE, S.E.A DELIVERS RESULT!\n\nCall 9091 9441 for Viewing / details\n\nYuna Lim \nDistrict Director\nS.E.A Delivers Result\n\n****** No. 1 Top Producer ( 1st Position ) 2013/ 2014/ 2015 / 2016 / 2017 / 2018 ******",
    "descriptions": {
        "en": ""
    },
    "notes": null,
    "externalId": null,
    "cobroke": 0,
    "price": {
        "value": 475000,
        "pretty": "S$ 475,000",
        "periodCode": null,
        "pricePerArea": {
            "value": 464.775,
            "unit": "sqft",
            "reference": "floorArea"
        },
        "type": {
            "code": null,
            "text": null,
            "pretty": null
        },
        "valuation": 0,
        "valuationText": null,
        "completed": 0,
        "currency": "SGD"
    },
    "sizes": {
        "bedrooms": {
            "value": 3,
            "text": "3 Bedrooms"
        },
        "bathrooms": {
            "value": 2,
            "text": "2 Bathrooms"
        },
        "extrarooms": {
            "value": null,
            "text": null
        },
        "floorArea": [
            {
                "unit": "sqft",
                "value": 1022,
                "text": "1022 sqft"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ],
        "floorX": null,
        "floorY": null,
        "landX": null,
        "landY": null
    },
    "pricePerArea": {
        "floorArea": [
            {
                "unit": "sqft",
                "value": 464.77495107632,
                "text": "S$ 464.77 psf"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ]
    },
    "dates": {
        "timezone": "Asia/Singapore",
        "firstPosted": {
            "date": "2019-12-29 16:03:40",
            "unix": 1577606620
        },
        "lastPosted": {
            "date": "2019-12-29 16:03:40",
            "unix": 1577606620
        },
        "expiry": {
            "date": "2020-01-30 23:59:59",
            "unix": 1580399999
        },
        "available": null
    },
    "urls": {
        "listing": {
            "api": "https://api.propertyguru.com/v1/listings/22168175?region=sg",
            "internal": "http://listing.guruestate.com/v1/listings/22168175?region=sg",
            "mobile": "https://www.propertyguru.com.sg/listing/hdb-for-sale-619a-punggol-drive-22168175",
            "desktop": "https://www.propertyguru.com.sg/listing/hdb-for-sale-619a-punggol-drive-22168175",
            "desktopByLocales": {
                "en": "https://www.propertyguru.com.sg/listing/hdb-for-sale-619a-punggol-drive-22168175"
            },
            "preview": {
                "desktop": "https://www.propertyguru.com.sg/preview-listing/22168175"
            }
        }
    },
    "_user": null,
    "qualityScore": 100,
    "finalScore": 2078987857,
    "tier": 3,
    "showAgentProfile": true,
    "event": null,
    "agent": {
        "id": 60047,
        "name": "Yuna Lim",
        "mobile": "+6590919441",
        "mobilePretty": "+65 9091 9441",
        "showProfile": true
    },
    "agency": {
        "id": 5637,
        "name": "SINGAPORE ESTATE AGENCY PTE LTD",
        "ceaLicenseNumber": null
    },
    "property": {
        "id": 21304,
        "name": "619A Punggol Drive",
        "typeCode": "HDB",
        "typeText": "HDB Apartment",
        "typeGroup": "H",
        "tenureCode": "L99",
        "tenureText": "99-year Leasehold",
        "topMonth": null,
        "topYear": 2012,
        "developer": "Housing & Development Board (HDB)"
    },
    "propertyUnit": {
        "furnishingCode": null,
        "furnishingText": null
    },
    "location": {
        "latitude": 1.402608,
        "longitude": 103.911427,
        "distance": null,
        "regionCode": "G",
        "regionText": "Serangoon / Thomson (D19-20)",
        "regionSlug": "serangoon-thomson-d19-20",
        "districtCode": "D19",
        "districtText": "Hougang / Punggol / Sengkang",
        "districtSlug": "hougang-punggol-sengkang",
        "areaCode": null,
        "areaText": null,
        "areaSlug": null,
        "fullAddress": "619A Punggol Drive",
        "hdbEstateCode": "19",
        "hdbEstateText": "Punggol"
    },
    "media": {
        "cover": {
            "id": 112790379,
            "caption": null,
            "statusCode": "ACT",
            "sortOrder": 1,
            "V550": "https://sg2-cdn.pgimgs.com/listing/22168175/UPHO.112790379.V550/619A-Punggol-Drive-Hougang-Punggol-Sengkang-Singapore.jpg",
            "V150": "https://sg2-cdn.pgimgs.com/listing/22168175/UPHO.112790379.V150/619A-Punggol-Drive-Hougang-Punggol-Sengkang-Singapore.jpg"
        },
        "listing": [],
        "property": null,
        "agent": "https://sg2-cdn.pgimgs.com/agent/60047/APHO.104794001.V120B.jpg",
        "agentLogo": [],
        "agencyLogo": [
            {
                "id": 65408171,
                "caption": null,
                "statusCode": "CONF",
                "sortOrder": 65408171,
                "V120": "https://sg2-cdn.pgimgs.com/agency/5637/CLOGO.65408171.V120.jpg"
            }
        ]
    },
    "tracking": {
        "refType": "tl3"
    },
    "isRankedSpotlight": false
},
{
    "id": 22149867,
    "statusCode": "ACT",
    "daysUntilExpire": 33,
    "sourceCode": null,
    "typeCode": "SALE",
    "typeText": "For Sale",
    "subTypeCode": null,
    "leaseTermCode": null,
    "leaseTermText": null,
    "featureCode": null,
    "accountTypeCode": "NORMAL",
    "accountSubTypeCode": null,
    "isPremiumAccount": true,
    "isPropertySpecialistListing": true,
    "isMobilePropertySpotlightListing": false,
    "isFeaturedListing": false,
    "isTransactorListing": false,
    "isCommercial": false,
    "hasFloorplans": true,
    "hasStream": false,
    "featuredBy": [],
    "localizedHeadline": null,
    "headlines": null,
    "localizedTitle": "666A Punggol Drive",
    "titles": {
        "en": ""
    },
    "localizedDescription": "FOR SALES!\n\n--- UNIT DETAILS ---\n\n* 5RM with balcony! \n* Nicely Renovated! \n* Unit facing with privacy , no blk to blk \n* Garden facing!\n* Bright & Breezy\n* 100% move in ready! \n* Bring your luggage in!\n* Beside Oasis Terrace \n* Oasis LRT to punggol Mrt / Waterway Point in 2 stops \n* Eateries & Groceries a mere 2 mins walk \n* Convenient!! \n* Viewing By Appt \n\n\n====================================\n* As good as brand new!\n====================================\n\n\n\nLooking for a Dream Home of yours? ( BUY / SELL / RENT ) ,\ncall or sms us your criteria. Our team of committed agents are here to assist you.\n\nSeller looking to Sell , you can contact me for more details, pricing and information. EXPERIENCE THE DIFFERENCE, S.E.A DELIVERS RESULT!\n\nCall 9091 9441 for Viewing / details\n\nYuna Lim \nDistrict Director\nS.E.A Delivers Result\n\n****** No. 1 Top Producer ( 1st Position ) 2013/ 2014/ 2015 / 2016 / 2017 / 2018 / 2019 ******",
    "descriptions": {
        "en": ""
    },
    "notes": null,
    "externalId": null,
    "cobroke": 0,
    "price": {
        "value": 638000,
        "pretty": "S$ 638,000",
        "periodCode": null,
        "pricePerArea": {
            "value": 524.6711,
            "unit": "sqft",
            "reference": "floorArea"
        },
        "type": {
            "code": null,
            "text": null,
            "pretty": null
        },
        "valuation": 0,
        "valuationText": null,
        "completed": 0,
        "currency": "SGD"
    },
    "sizes": {
        "bedrooms": {
            "value": 3,
            "text": "3 Bedrooms"
        },
        "bathrooms": {
            "value": 2,
            "text": "2 Bathrooms"
        },
        "extrarooms": {
            "value": null,
            "text": null
        },
        "floorArea": [
            {
                "unit": "sqft",
                "value": 1216,
                "text": "1216 sqft"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ],
        "floorX": null,
        "floorY": null,
        "landX": null,
        "landY": null
    },
    "pricePerArea": {
        "floorArea": [
            {
                "unit": "sqft",
                "value": 524.67105263158,
                "text": "S$ 524.67 psf"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ]
    },
    "dates": {
        "timezone": "Asia/Singapore",
        "firstPosted": {
            "date": "2019-12-29 16:03:36",
            "unix": 1577606616
        },
        "lastPosted": {
            "date": "2019-12-29 16:03:36",
            "unix": 1577606616
        },
        "expiry": {
            "date": "2020-01-30 23:59:59",
            "unix": 1580399999
        },
        "available": null
    },
    "urls": {
        "listing": {
            "api": "https://api.propertyguru.com/v1/listings/22149867?region=sg",
            "internal": "http://listing.guruestate.com/v1/listings/22149867?region=sg",
            "mobile": "https://www.propertyguru.com.sg/listing/hdb-for-sale-666a-punggol-drive-22149867",
            "desktop": "https://www.propertyguru.com.sg/listing/hdb-for-sale-666a-punggol-drive-22149867",
            "desktopByLocales": {
                "en": "https://www.propertyguru.com.sg/listing/hdb-for-sale-666a-punggol-drive-22149867"
            },
            "preview": {
                "desktop": "https://www.propertyguru.com.sg/preview-listing/22149867"
            }
        }
    },
    "_user": null,
    "qualityScore": 100,
    "finalScore": 2078987854,
    "tier": 3,
    "showAgentProfile": true,
    "event": null,
    "agent": {
        "id": 60047,
        "name": "Yuna Lim",
        "mobile": "+6590919441",
        "mobilePretty": "+65 9091 9441",
        "showProfile": true
    },
    "agency": {
        "id": 5637,
        "name": "SINGAPORE ESTATE AGENCY PTE LTD",
        "ceaLicenseNumber": null
    },
    "property": {
        "id": 23724,
        "name": "666A Punggol Drive",
        "typeCode": "HDB",
        "typeText": "HDB Apartment",
        "typeGroup": "H",
        "tenureCode": "L99",
        "tenureText": "99-year Leasehold",
        "topMonth": null,
        "topYear": null,
        "developer": "Housing & Development Board (HDB)"
    },
    "propertyUnit": {
        "furnishingCode": null,
        "furnishingText": null
    },
    "location": {
        "latitude": 1.401186,
        "longitude": 103.91489,
        "distance": null,
        "regionCode": "G",
        "regionText": "Serangoon / Thomson (D19-20)",
        "regionSlug": "serangoon-thomson-d19-20",
        "districtCode": "D19",
        "districtText": "Hougang / Punggol / Sengkang",
        "districtSlug": "hougang-punggol-sengkang",
        "areaCode": null,
        "areaText": null,
        "areaSlug": null,
        "fullAddress": "666A Punggol Drive",
        "hdbEstateCode": "19",
        "hdbEstateText": "Punggol"
    },
    "media": {
        "cover": {
            "id": 112593901,
            "caption": null,
            "statusCode": "ACT",
            "sortOrder": 1,
            "V550": "https://sg2-cdn.pgimgs.com/listing/22149867/UPHO.112593901.V550/666A-Punggol-Drive-Hougang-Punggol-Sengkang-Singapore.jpg",
            "V150": "https://sg2-cdn.pgimgs.com/listing/22149867/UPHO.112593901.V150/666A-Punggol-Drive-Hougang-Punggol-Sengkang-Singapore.jpg"
        },
        "listing": [],
        "property": null,
        "agent": "https://sg2-cdn.pgimgs.com/agent/60047/APHO.104794001.V120B.jpg",
        "agentLogo": [],
        "agencyLogo": [
            {
                "id": 65408171,
                "caption": null,
                "statusCode": "CONF",
                "sortOrder": 65408171,
                "V120": "https://sg2-cdn.pgimgs.com/agency/5637/CLOGO.65408171.V120.jpg"
            }
        ]
    },
    "tracking": {
        "refType": "tl3"
    },
    "isRankedSpotlight": false
},
{
    "id": 22151081,
    "statusCode": "ACT",
    "daysUntilExpire": 33,
    "sourceCode": null,
    "typeCode": "SALE",
    "typeText": "For Sale",
    "subTypeCode": null,
    "leaseTermCode": null,
    "leaseTermText": null,
    "featureCode": null,
    "accountTypeCode": "NORMAL",
    "accountSubTypeCode": null,
    "isPremiumAccount": true,
    "isPropertySpecialistListing": true,
    "isMobilePropertySpotlightListing": false,
    "isFeaturedListing": false,
    "isTransactorListing": false,
    "isCommercial": false,
    "hasFloorplans": true,
    "hasStream": false,
    "featuredBy": [],
    "localizedHeadline": null,
    "headlines": null,
    "localizedTitle": "672A Edgefield Plains",
    "titles": {
        "en": ""
    },
    "localizedDescription": "FOR SALES!\n\n--- UNIT DETAILS ---\n\n* No west sun! \n* Bright & Breezy\n* Super well kept!\n* Only 5 years old \n* Mins walk to Damai LRT, 1 stop to punggol Mrt/ Waterway Point \n* Eateries & Groceries just a stroll away \n* Convenient \n* Viewing By Appt \n\n\n====================================\n* Super well kept by owners \n====================================\n\n\n\nLooking for a Dream Home of yours? ( BUY / SELL / RENT ) ,\ncall or sms us your criteria. Our team of committed agents are here to assist you.\n\nSeller looking to Sell , you can contact me for more details, pricing and information. EXPERIENCE THE DIFFERENCE, S.E.A DELIVERS RESULT!\n\nCall 9091 9441 for Viewing / details\n\nYuna Lim \nDistrict Director\nS.E.A Delivers Result\n\n****** No. 1 Top Producer ( 1st Position ) 2013/ 2014/ 2015 / 2016 / 2017 / 2018 ******",
    "descriptions": {
        "en": ""
    },
    "notes": null,
    "externalId": null,
    "cobroke": 0,
    "price": {
        "value": 320000,
        "pretty": "S$ 320,000",
        "periodCode": null,
        "pricePerArea": {
            "value": 457.7969,
            "unit": "sqft",
            "reference": "floorArea"
        },
        "type": {
            "code": null,
            "text": null,
            "pretty": null
        },
        "valuation": 0,
        "valuationText": null,
        "completed": 0,
        "currency": "SGD"
    },
    "sizes": {
        "bedrooms": {
            "value": 2,
            "text": "2 Bedrooms"
        },
        "bathrooms": {
            "value": 2,
            "text": "2 Bathrooms"
        },
        "extrarooms": {
            "value": null,
            "text": null
        },
        "floorArea": [
            {
                "unit": "sqft",
                "value": 699,
                "text": "699 sqft"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ],
        "floorX": null,
        "floorY": null,
        "landX": null,
        "landY": null
    },
    "pricePerArea": {
        "floorArea": [
            {
                "unit": "sqft",
                "value": 457.79685264664,
                "text": "S$ 457.80 psf"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ]
    },
    "dates": {
        "timezone": "Asia/Singapore",
        "firstPosted": {
            "date": "2019-12-29 16:03:32",
            "unix": 1577606612
        },
        "lastPosted": {
            "date": "2019-12-29 16:03:32",
            "unix": 1577606612
        },
        "expiry": {
            "date": "2020-01-30 23:59:59",
            "unix": 1580399999
        },
        "available": null
    },
    "urls": {
        "listing": {
            "api": "https://api.propertyguru.com/v1/listings/22151081?region=sg",
            "internal": "http://listing.guruestate.com/v1/listings/22151081?region=sg",
            "mobile": "https://www.propertyguru.com.sg/listing/hdb-for-sale-672a-edgefield-plains-22151081",
            "desktop": "https://www.propertyguru.com.sg/listing/hdb-for-sale-672a-edgefield-plains-22151081",
            "desktopByLocales": {
                "en": "https://www.propertyguru.com.sg/listing/hdb-for-sale-672a-edgefield-plains-22151081"
            },
            "preview": {
                "desktop": "https://www.propertyguru.com.sg/preview-listing/22151081"
            }
        }
    },
    "_user": null,
    "qualityScore": 100,
    "finalScore": 2078987848,
    "tier": 3,
    "showAgentProfile": true,
    "event": null,
    "agent": {
        "id": 60047,
        "name": "Yuna Lim",
        "mobile": "+6590919441",
        "mobilePretty": "+65 9091 9441",
        "showProfile": true
    },
    "agency": {
        "id": 5637,
        "name": "SINGAPORE ESTATE AGENCY PTE LTD",
        "ceaLicenseNumber": null
    },
    "property": {
        "id": 22494,
        "name": "672A Edgefield Plains",
        "typeCode": "HDB",
        "typeText": "HDB Apartment",
        "typeGroup": "H",
        "tenureCode": "L99",
        "tenureText": "99-year Leasehold",
        "topMonth": null,
        "topYear": 2014,
        "developer": "Housing & Development Board (HDB)"
    },
    "propertyUnit": {
        "furnishingCode": null,
        "furnishingText": null
    },
    "location": {
        "latitude": 1.4064722,
        "longitude": 103.9125444,
        "distance": null,
        "regionCode": "G",
        "regionText": "Serangoon / Thomson (D19-20)",
        "regionSlug": "serangoon-thomson-d19-20",
        "districtCode": "D19",
        "districtText": "Hougang / Punggol / Sengkang",
        "districtSlug": "hougang-punggol-sengkang",
        "areaCode": null,
        "areaText": null,
        "areaSlug": null,
        "fullAddress": "672A Edgefield Plains",
        "hdbEstateCode": "19",
        "hdbEstateText": "Punggol"
    },
    "media": {
        "cover": {
            "id": 112607497,
            "caption": null,
            "statusCode": "ACT",
            "sortOrder": 1,
            "V550": "https://sg2-cdn.pgimgs.com/listing/22151081/UPHO.112607497.V550/672A-Edgefield-Plains-Hougang-Punggol-Sengkang-Singapore.jpg",
            "V150": "https://sg2-cdn.pgimgs.com/listing/22151081/UPHO.112607497.V150/672A-Edgefield-Plains-Hougang-Punggol-Sengkang-Singapore.jpg"
        },
        "listing": [],
        "property": null,
        "agent": "https://sg2-cdn.pgimgs.com/agent/60047/APHO.104794001.V120B.jpg",
        "agentLogo": [],
        "agencyLogo": [
            {
                "id": 65408171,
                "caption": null,
                "statusCode": "CONF",
                "sortOrder": 65408171,
                "V120": "https://sg2-cdn.pgimgs.com/agency/5637/CLOGO.65408171.V120.jpg"
            }
        ]
    },
    "tracking": {
        "refType": "tl3"
    },
    "isRankedSpotlight": false
},
{
    "id": 22088261,
    "statusCode": "ACT",
    "daysUntilExpire": 33,
    "sourceCode": null,
    "typeCode": "SALE",
    "typeText": "For Sale",
    "subTypeCode": null,
    "leaseTermCode": null,
    "leaseTermText": null,
    "featureCode": null,
    "accountTypeCode": "NORMAL",
    "accountSubTypeCode": null,
    "isPremiumAccount": true,
    "isPropertySpecialistListing": true,
    "isMobilePropertySpotlightListing": false,
    "isFeaturedListing": false,
    "isTransactorListing": false,
    "isCommercial": false,
    "hasFloorplans": true,
    "hasStream": false,
    "featuredBy": [],
    "localizedHeadline": null,
    "headlines": null,
    "localizedTitle": "268A Punggol Field",
    "titles": {
        "en": ""
    },
    "localizedDescription": "FOR SALES!\n\n--- UNIT DETAILS ---\n\n* Nicely Renovated! \n* No west sun! \n* Bright & Breezy\n* 4rm premium blk \n* Only 7 years old \n* Mins Walk To Punggol MRT / Waterway Point\n* Facing green \n* Eateries & Groceries just a stroll away \n* Convenient \n* Viewing By Appt \n\n\n====================================\n* Mins walk to MRT / Waterway Point\n====================================\n\n\n\nLooking for a Dream Home of yours? ( BUY / SELL / RENT ) ,\ncall or sms us your criteria. Our team of committed agents are here to assist you.\n\nSeller looking to Sell , you can contact me for more details, pricing and information. EXPERIENCE THE DIFFERENCE, S.E.A DELIVERS RESULT!\n\nCall 9091 9441 for Viewing / details\n\nYuna Lim \nDistrict Director\nS.E.A Delivers Result\n\n****** No. 1 Top Producer ( 1st Position ) 2013/ 2014/ 2015 / 2016 / 2017 / 2018 ******",
    "descriptions": {
        "en": ""
    },
    "notes": null,
    "externalId": null,
    "cobroke": 0,
    "price": {
        "value": 410000,
        "pretty": "S$ 410,000",
        "periodCode": null,
        "pricePerArea": {
            "value": 409.5904,
            "unit": "sqft",
            "reference": "floorArea"
        },
        "type": {
            "code": null,
            "text": null,
            "pretty": null
        },
        "valuation": 0,
        "valuationText": null,
        "completed": 0,
        "currency": "SGD"
    },
    "sizes": {
        "bedrooms": {
            "value": 3,
            "text": "3 Bedrooms"
        },
        "bathrooms": {
            "value": 2,
            "text": "2 Bathrooms"
        },
        "extrarooms": {
            "value": null,
            "text": null
        },
        "floorArea": [
            {
                "unit": "sqft",
                "value": 1001,
                "text": "1001 sqft"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ],
        "floorX": null,
        "floorY": null,
        "landX": null,
        "landY": null
    },
    "pricePerArea": {
        "floorArea": [
            {
                "unit": "sqft",
                "value": 409.59040959041,
                "text": "S$ 409.59 psf"
            }
        ],
        "landArea": [
            {
                "unit": null,
                "value": null,
                "text": null
            }
        ]
    },
    "dates": {
        "timezone": "Asia/Singapore",
        "firstPosted": {
            "date": "2019-12-29 16:03:29",
            "unix": 1577606609
        },
        "lastPosted": {
            "date": "2019-12-29 16:03:29",
            "unix": 1577606609
        },
        "expiry": {
            "date": "2020-01-30 23:59:59",
            "unix": 1580399999
        },
        "available": null
    },
    "urls": {
        "listing": {
            "api": "https://api.propertyguru.com/v1/listings/22088261?region=sg",
            "internal": "http://listing.guruestate.com/v1/listings/22088261?region=sg",
            "mobile": "https://www.propertyguru.com.sg/listing/hdb-for-sale-268a-punggol-field-22088261",
            "desktop": "https://www.propertyguru.com.sg/listing/hdb-for-sale-268a-punggol-field-22088261",
            "desktopByLocales": {
                "en": "https://www.propertyguru.com.sg/listing/hdb-for-sale-268a-punggol-field-22088261"
            },
            "preview": {
                "desktop": "https://www.propertyguru.com.sg/preview-listing/22088261"
            }
        }
    },
    "_user": null,
    "qualityScore": 100,
    "finalScore": 2078987848,
    "tier": 3,
    "showAgentProfile": true,
    "event": null,
    "agent": {
        "id": 60047,
        "name": "Yuna Lim",
        "mobile": "+6590919441",
        "mobilePretty": "+65 9091 9441",
        "showProfile": true
    },
    "agency": {
        "id": 5637,
        "name": "SINGAPORE ESTATE AGENCY PTE LTD",
        "ceaLicenseNumber": null
    },
    "property": {
        "id": 22678,
        "name": "268A Punggol Field",
        "typeCode": "HDB",
        "typeText": "HDB Apartment",
        "typeGroup": "H",
        "tenureCode": "L99",
        "tenureText": "99-year Leasehold",
        "topMonth": null,
        "topYear": 2011,
        "developer": "Housing & Development Board (HDB)"
    },
    "propertyUnit": {
        "furnishingCode": null,
        "furnishingText": null
    },
    "location": {
        "latitude": 1.403084,
        "longitude": 103.8986369,
        "distance": null,
        "regionCode": "G",
        "regionText": "Serangoon / Thomson (D19-20)",
        "regionSlug": "serangoon-thomson-d19-20",
        "districtCode": "D19",
        "districtText": "Hougang / Punggol / Sengkang",
        "districtSlug": "hougang-punggol-sengkang",
        "areaCode": null,
        "areaText": null,
        "areaSlug": null,
        "fullAddress": "268A Punggol Field",
        "hdbEstateCode": "19",
        "hdbEstateText": "Punggol"
    },
    "media": {
        "cover": {
            "id": 111882099,
            "caption": null,
            "statusCode": "ACT",
            "sortOrder": 1,
            "V150": "https://sg2-cdn.pgimgs.com/listing/22088261/UPHO.111882099.V150/268A-Punggol-Field-Hougang-Punggol-Sengkang-Singapore.jpg",
            "V550": "https://sg2-cdn.pgimgs.com/listing/22088261/UPHO.111882099.V550/268A-Punggol-Field-Hougang-Punggol-Sengkang-Singapore.jpg"
        },
        "listing": [],
        "property": null,
        "agent": "https://sg2-cdn.pgimgs.com/agent/60047/APHO.104794001.V120B.jpg",
        "agentLogo": [],
        "agencyLogo": [
            {
                "id": 65408171,
                "caption": null,
                "statusCode": "CONF",
                "sortOrder": 65408171,
                "V120": "https://sg2-cdn.pgimgs.com/agency/5637/CLOGO.65408171.V120.jpg"
            }
        ]
    },
    "tracking": {
        "refType": "tl3"
    },
    "isRankedSpotlight": false
},
];
