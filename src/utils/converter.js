/**
 * @param {string} url - will be the url of the API
 * @returns {object} - will return the converted data in an object format
 */

const convertToJSON = async (urlString) => {
  const queryParams = new URL(urlString).searchParams;
  const jsonData = {
    client_id: queryParams.get("cid") || "", // Use 'cid' query parameter for client_id
    events: [
      {
        name: "play",
        params: {
          event_category: "ad",
          event_label: "Telaria",
          ad_unit_id: queryParams.get("ad_unit"),
          advertiser_domain: queryParams.get("advertiser_domain"),
          creative_id: queryParams.get("creative_id"),
          loading_token: queryParams.get("cid"), // Use 'cid' for loading_token as well
          pod_placement: queryParams.get("pod_placement"),
          video_duration: queryParams.get("video_duration"),
          ad_source_type: queryParams.get("ad_source_type"),
          gross_micros: queryParams.get("gross_micros"),
          currency_code: queryParams.get("currency_code"),
          ad_source_id: queryParams.get("ad_source_id"),
          device_id: queryParams.get("device_id"),
          deal_code: queryParams.get("deal_code"),
          brand_id: queryParams.get("brand_id"),
          supply_id: queryParams.get("supply_id"),
          ppid: queryParams.get("ppid"),
          prog: queryParams.get("prog"),
          ibms_title_id: queryParams.get("ibms_title_id"),
          type: queryParams.get("type"),
          chanl: queryParams.get("chanl"),
        },
      },
    ],
  };
  return jsonData;
};

module.exports = { convertToJSON };
