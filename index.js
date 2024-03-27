const { convertToJSON } = require("./src/utils/converter.js");
const { PostAPIData } = require("./src/utils/api.js");

const url =
  "https://www.testfunction.com/?t=event&tid=UA-808429-73&cid=$12345.54321&event_category=Ad&ea=play&event_label=Telaria&ad_unit=${AD_UNIT_ID:HMAC}&advertiser_domain=${ADVERTISER_DOMAIN:HMAC}&creative_id=${CREATIVE_ID:HMAC}&loading_token=${U:loadingtoken:HMAC}&pod_placement=${QS_u:podplacement:HMAC}&video_duration=${QS_u:videoduration:HMAC}&ad_source_type=${AD_SOURCE_TYPE:HMAC}&gross_micros=${GROSS_MICROS:HMAC}&currency_code=${CURRENCY_CODE:HMAC}&ad_source_id=${AD_SOURCE_ID:HMAC}&device_id=${DEVICE_ID:HMAC}&deal_code=${DEAL_CODE:HMAC}&brand_id=${BRAND_ID:HMAC}&supply_id=${SUPPLY_ID:HMAC}&ppid=${QS_u:ppid:HMAC}&prog=${QS_u:prog:HMAC}&ibms_title_id=${QS_u:ibmsTitleId:HMAC}&type=${QS_u:type:HMAC}&chanl=${QS_u:chanl:HMAC}";

const newURL =
  "https://www.testfunction.com/?t=event&tid=UA-808429-73&cid=12345.54321&event_category=Ad&ea=play&event_label=Telaria";

const main = async () => {
  const data = await convertToJSON(url);
  console.log(data);
  await PostAPIData(data);
};

main();
