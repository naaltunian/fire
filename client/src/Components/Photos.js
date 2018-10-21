import React from 'react';
import Photo from './Photo.js';
import { Grid } from "semantic-ui-react";
import axios from "axios";

// componentDidMount() {
//     axios.get("https://1b85918da58f48b3a3c895dbada870ff.vfs.cloud9.us-east-1.amazonaws.com/pbchack2018")
//     .then(({data}) => {

//     })
// }

const data = [
    {
        "statuses": [
        {
        "created_at": "Sat Oct 20 22:37:29 +0000 2018",
        "id": 1053777250401837000,
        "id_str": "1053777250401837061",
        "text": "It's going on! #pbchack2018",
        "truncated": false,
        "entities": {
        "hashtags": [
        {
        "text": "pbchack2018",
        "indices": [
        15,
        27
        ]
        }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": []
        },
        "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
        },
        "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
        "id": 1045773428270207000,
        "id_str": "1045773428270206977",
        "name": "Harry Rocha",
        "screen_name": "mrroecha",
        "location": "",
        "description": "",
        "url": null,
        "entities": {
        "description": {
        "urls": []
        }
        },
        "protected": false,
        "followers_count": 1,
        "friends_count": 14,
        "listed_count": 0,
        "created_at": "Fri Sep 28 20:33:09 +0000 2018",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "F5F8FA",
        "profile_background_image_url": null,
        "profile_background_image_url_https": null,
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1045773767090360322/Mr3QA4U9_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1045773767090360322/Mr3QA4U9_normal.jpg",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
        },
        {
        "created_at": "Sat Oct 20 22:36:15 +0000 2018",
        "id": 1053776940719595500,
        "id_str": "1053776940719595521",
        "text": "#pbchack2018",
        "truncated": false,
        "entities": {
        "hashtags": [
        {
        "text": "pbchack2018",
        "indices": [
        0,
        12
        ]
        }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": []
        },
        "metadata": {
        "iso_language_code": "und",
        "result_type": "recent"
        },
        "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
        "id": 1045773428270207000,
        "id_str": "1045773428270206977",
        "name": "Harry Rocha",
        "screen_name": "mrroecha",
        "location": "",
        "description": "",
        "url": null,
        "entities": {
        "description": {
        "urls": []
        }
        },
        "protected": false,
        "followers_count": 1,
        "friends_count": 14,
        "listed_count": 0,
        "created_at": "Fri Sep 28 20:33:09 +0000 2018",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "F5F8FA",
        "profile_background_image_url": null,
        "profile_background_image_url_https": null,
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1045773767090360322/Mr3QA4U9_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1045773767090360322/Mr3QA4U9_normal.jpg",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "und"
        },
        {
        "created_at": "Sat Oct 20 22:08:53 +0000 2018",
        "id": 1053770052774838300,
        "id_str": "1053770052774838273",
        "text": "#pbchack2018 https://t.co/YfKeNDTmXM",
        "truncated": false,
        "entities": {
        "hashtags": [
        {
        "text": "pbchack2018",
        "indices": [
        0,
        12
        ]
        }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": [],
        "media": [
        {
        "id": 1053770040552632300,
        "id_str": "1053770040552632323",
        "indices": [
        13,
        36
        ],
        "media_url": "http://pbs.twimg.com/media/Dp--RM4WsAMBMwF.png",
        "media_url_https": "https://pbs.twimg.com/media/Dp--RM4WsAMBMwF.png",
        "url": "https://t.co/YfKeNDTmXM",
        "display_url": "pic.twitter.com/YfKeNDTmXM",
        "expanded_url": "https://twitter.com/mrroecha/status/1053770052774838273/photo/1",
        "type": "photo",
        "sizes": {
        "small": {
        "w": 680,
        "h": 340,
        "resize": "fit"
        },
        "medium": {
        "w": 1000,
        "h": 500,
        "resize": "fit"
        },
        "thumb": {
        "w": 150,
        "h": 150,
        "resize": "crop"
        },
        "large": {
        "w": 1000,
        "h": 500,
        "resize": "fit"
        }
        }
        }
        ]
        },
        "extended_entities": {
        "media": [
        {
        "id": 1053770040552632300,
        "id_str": "1053770040552632323",
        "indices": [
        13,
        36
        ],
        "media_url": "http://pbs.twimg.com/media/Dp--RM4WsAMBMwF.png",
        "media_url_https": "https://pbs.twimg.com/media/Dp--RM4WsAMBMwF.png",
        "url": "https://t.co/YfKeNDTmXM",
        "display_url": "pic.twitter.com/YfKeNDTmXM",
        "expanded_url": "https://twitter.com/mrroecha/status/1053770052774838273/photo/1",
        "type": "photo",
        "sizes": {
        "small": {
        "w": 680,
        "h": 340,
        "resize": "fit"
        },
        "medium": {
        "w": 1000,
        "h": 500,
        "resize": "fit"
        },
        "thumb": {
        "w": 150,
        "h": 150,
        "resize": "crop"
        },
        "large": {
        "w": 1000,
        "h": 500,
        "resize": "fit"
        }
        }
        }
        ]
        },
        "metadata": {
        "iso_language_code": "und",
        "result_type": "recent"
        },
        "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
        "id": 1045773428270207000,
        "id_str": "1045773428270206977",
        "name": "Harry Rocha",
        "screen_name": "mrroecha",
        "location": "",
        "description": "",
        "url": null,
        "entities": {
        "description": {
        "urls": []
        }
        },
        "protected": false,
        "followers_count": 1,
        "friends_count": 14,
        "listed_count": 0,
        "created_at": "Fri Sep 28 20:33:09 +0000 2018",
        "favourites_count": 0,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 3,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "F5F8FA",
        "profile_background_image_url": null,
        "profile_background_image_url_https": null,
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1045773767090360322/Mr3QA4U9_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1045773767090360322/Mr3QA4U9_normal.jpg",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "und"
        },
        {
        "created_at": "Sat Oct 20 21:55:52 +0000 2018",
        "id": 1053766776125841400,
        "id_str": "1053766776125841408",
        "text": "Boca Hackathon! #pbchack2018 https://t.co/C285WeXyLx",
        "truncated": false,
        "entities": {
        "hashtags": [
        {
        "text": "pbchack2018",
        "indices": [
        16,
        28
        ]
        }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": [],
        "media": [
        {
        "id": 1053766767997259800,
        "id_str": "1053766767997259778",
        "indices": [
        29,
        52
        ],
        "media_url": "http://pbs.twimg.com/media/Dp-7StqWkAI-seS.jpg",
        "media_url_https": "https://pbs.twimg.com/media/Dp-7StqWkAI-seS.jpg",
        "url": "https://t.co/C285WeXyLx",
        "display_url": "pic.twitter.com/C285WeXyLx",
        "expanded_url": "https://twitter.com/TeamFireHacks/status/1053766776125841408/photo/1",
        "type": "photo",
        "sizes": {
        "thumb": {
        "w": 150,
        "h": 150,
        "resize": "crop"
        },
        "large": {
        "w": 1375,
        "h": 2048,
        "resize": "fit"
        },
        "medium": {
        "w": 806,
        "h": 1200,
        "resize": "fit"
        },
        "small": {
        "w": 456,
        "h": 680,
        "resize": "fit"
        }
        }
        }
        ]
        },
        "extended_entities": {
        "media": [
        {
        "id": 1053766767997259800,
        "id_str": "1053766767997259778",
        "indices": [
        29,
        52
        ],
        "media_url": "http://pbs.twimg.com/media/Dp-7StqWkAI-seS.jpg",
        "media_url_https": "https://pbs.twimg.com/media/Dp-7StqWkAI-seS.jpg",
        "url": "https://t.co/C285WeXyLx",
        "display_url": "pic.twitter.com/C285WeXyLx",
        "expanded_url": "https://twitter.com/TeamFireHacks/status/1053766776125841408/photo/1",
        "type": "photo",
        "sizes": {
        "thumb": {
        "w": 150,
        "h": 150,
        "resize": "crop"
        },
        "large": {
        "w": 1375,
        "h": 2048,
        "resize": "fit"
        },
        "medium": {
        "w": 806,
        "h": 1200,
        "resize": "fit"
        },
        "small": {
        "w": 456,
        "h": 680,
        "resize": "fit"
        }
        }
        }
        ]
        },
        "metadata": {
        "iso_language_code": "hu",
        "result_type": "recent"
        },
        "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
        "id": 1053650705804861400,
        "id_str": "1053650705804861440",
        "name": "TeamFire",
        "screen_name": "TeamFireHacks",
        "location": "",
        "description": "",
        "url": null,
        "entities": {
        "description": {
        "urls": []
        }
        },
        "protected": false,
        "followers_count": 0,
        "friends_count": 0,
        "listed_count": 0,
        "created_at": "Sat Oct 20 14:14:38 +0000 2018",
        "favourites_count": 1,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 12,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "F5F8FA",
        "profile_background_image_url": null,
        "profile_background_image_url_https": null,
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1053651030053998592/q862ehVp_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1053651030053998592/q862ehVp_normal.jpg",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "hu"
        },
        {
        "created_at": "Sat Oct 20 18:50:15 +0000 2018",
        "id": 1053720065902817300,
        "id_str": "1053720065902817281",
        "text": "Love Hacking Its Fun #pbchack2018",
        "truncated": false,
        "entities": {
        "hashtags": [
        {
        "text": "pbchack2018",
        "indices": [
        21,
        33
        ]
        }
        ],
        "symbols": [],
        "user_mentions": [],
        "urls": []
        },
        "metadata": {
        "iso_language_code": "en",
        "result_type": "recent"
        },
        "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "user": {
        "id": 1053650705804861400,
        "id_str": "1053650705804861440",
        "name": "TeamFire",
        "screen_name": "TeamFireHacks",
        "location": "",
        "description": "",
        "url": null,
        "entities": {
        "description": {
        "urls": []
        }
        },
        "protected": false,
        "followers_count": 0,
        "friends_count": 0,
        "listed_count": 0,
        "created_at": "Sat Oct 20 14:14:38 +0000 2018",
        "favourites_count": 1,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": false,
        "verified": false,
        "statuses_count": 12,
        "lang": "en",
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "F5F8FA",
        "profile_background_image_url": null,
        "profile_background_image_url_https": null,
        "profile_background_tile": false,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1053651030053998592/q862ehVp_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1053651030053998592/q862ehVp_normal.jpg",
        "profile_link_color": "1DA1F2",
        "profile_sidebar_border_color": "C0DEED",
        "profile_sidebar_fill_color": "DDEEF6",
        "profile_text_color": "333333",
        "profile_use_background_image": true,
        "has_extended_profile": false,
        "default_profile": true,
        "default_profile_image": false,
        "following": false,
        "follow_request_sent": false,
        "notifications": false,
        "translator_type": "none"
        },
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "lang": "en"
        }
        ],
        "search_metadata": {
        "completed_in": 0.02,
        "max_id": 1053777250401837000,
        "max_id_str": "1053777250401837061",
        "query": "pbchack2018",
        "refresh_url": "?since_id=1053777250401837061&q=pbchack2018&include_entities=1",
        "count": 15,
        "since_id": 0,
        "since_id_str": "0"
        }
        }
]

const dates= [ 1, 2]

console.log(data);

const Photos = () => {
    return(
        <Grid className="background" columns='equal' centered>
           {data[0].statuses.map((tweet, index) => {
               return <Photo key={index} tweet={tweet} />
           })
        }
        </Grid>
    )
}

export default Photos;
