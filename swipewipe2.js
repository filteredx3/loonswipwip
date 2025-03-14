// This script will intercept and modify the iTunes lookup response
function mockResponse() {
  $done({
    status: 302,
    headers: {
      "Server": "daiquiri/5",
      "Content-Type": "text/html",
      "Content-Length": "143",
      "Location": "https://itunes.apple.com/lookup?bundleId=com.aoklab.fewerphotos&country=FR",
      "X-Apple-Jingle-Correlation-Key": "CVBAJGG6GMMSCOOOMQIEH6DIRM",
      "x-daiquiri-instance": "daiquiri:12282005:mr47p00it-qujn02122302:7987:25RELEASE27:daiquiri-amp-store-l7shared-ext-001-mr",
      "Date": new Date().toUTCString(),
      "X-Cache": "TCP_REFRESH_MISS from a95-101-8-184.deploy.akamaitechnologies.com (AkamaiGHost/22.0.0-bb2a2774a48042877147cbed2bad8ca6) (S)",
      "X-True-Cache-Key": "/L/itunes.apple.com/lookup vcd=2897 ci2=bundleId=com.aoklab.fewerphotos&country=FR///",
      "Connection": "keep-alive",
      "X-Cache-Remote": "TCP_MEM_HIT from a95-101-8-182.deploy.akamaitechnologies.com (AkamaiGHost/11.8.3-77160ac4eff0ba0794c5b2db5e229965) (A)",
      "X-Apple-Partner": "origin.0"
    },
    body: ""
  });
}

mockResponse();
