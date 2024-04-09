const { convertToJSON } = require("./src/utils/converter.js");
const { PostAPIData } = require("./src/utils/api.js");
const express = require("express");
const { nullChecker } = require("./src/utils/nullChecker.js");
const app = express();
const port = 3000;

const url =
  "https://www.testfunction.com/?t=event&tid=UA-808429-73&cid=1234235.53444321&event_category=Ad&ea=play&event_label=Telaria&ad_unit=${AD_UNIT_ID:HMAC}&advertiser_domain=${ADVERTISER_DOMAIN:HMAC}&creative_id=${CREATIVE_ID:HMAC}&loading_token=${U:loadingtoken:HMAC}&pod_placement=${QS_u:podplacement:HMAC}&video_duration=${QS_u:videoduration:HMAC}&ad_source_type=${AD_SOURCE_TYPE:HMAC}&gross_micros=${GROSS_MICROS:HMAC}&currency_code=${CURRENCY_CODE:HMAC}&ad_source_id=${AD_SOURCE_ID:HMAC}&device_id=${DEVICE_ID:HMAC}&deal_code=${DEAL_CODE:HMAC}&brand_id=${BRAND_ID:HMAC}&supply_id=${SUPPLY_ID:HMAC}&ppid=${QS_u:ppid:HMAC}&prog=${QS_u:prog:HMAC}&ibms_title_id=${QS_u:ibmsTitleId:HMAC}&type=${QS_u:type:HMAC}&chanl=${QS_u:chanl:HMAC}";

const newURL =
  "localhost:3000/?t=event&tid=UA-808429-73&cid=1234235.53444321&event_category=Ad&ea=play&event_label=Telaria&ad_unit=${AD_UNIT_ID:HMAC}&advertiser_domain=${ADVERTISER_DOMAIN:HMAC}&creative_id=${CREATIVE_ID:HMAC}&loading_token=${U:loadingtoken:HMAC}&pod_placement=${QS_u:podplacement:HMAC}&video_duration=${QS_u:videoduration:HMAC}&ad_source_type=${AD_SOURCE_TYPE:HMAC}&gross_micros=${GROSS_MICROS:HMAC}&currency_code=${CURRENCY_CODE:HMAC}&ad_source_id=${AD_SOURCE_ID:HMAC}&device_id=${DEVICE_ID:HMAC}&deal_code=${DEAL_CODE:HMAC}&brand_id=${BRAND_ID:HMAC}&supply_id=${SUPPLY_ID:HMAC}&ppid=${QS_u:ppid:HMAC}&prog=${QS_u:prog:HMAC}&ibms_title_id=${QS_u:ibmsTitleId:HMAC}&type=${QS_u:type:HMAC}&chanl=${QS_u:chanl:HMAC}";

const main = async () => {
  app.get("/", async (req, res) => {
    res.send("Gathering the URL Search Params to pass through the API");
    const urlPath = req.protocol + "://" + req.get("host") + req.originalUrl;
    const data = await convertToJSON(urlPath);
    console.log(typeof data);
    const newData = nullChecker(data);
    console.log(
      `This is the data geting sent to GA4: ${JSON.stringify(newData)}`
    );
    await PostAPIData(newData);
    console.log("Data has been sent to GA4");
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

main();
