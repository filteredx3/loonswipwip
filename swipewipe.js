// Loon Script for intercepting iTunes lookup request
// Name: iTunes Lookup Mock Response

// Define the specific request to intercept
const targetURL = "http://itunes.apple.com/lookup?bundleId=com.aoklab.fewerphotos&country=FR";
const targetHost = "itunes.apple.com";

// Script that handles the interception
const scriptName = "iTunes Lookup Mock";
const script = `
function mockResponse() {
  // Generate current date in the correct format (RFC 1123 format)
  const now = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const formattedDate = days[now.getUTCDay()] + ", " +
                        String(now.getUTCDate()).padStart(2, '0') + " " +
                        months[now.getUTCMonth()] + " " +
                        now.getUTCFullYear() + " " +
                        String(now.getUTCHours()).padStart(2, '0') + ":" +
                        String(now.getUTCMinutes()).padStart(2, '0') + ":" +
                        String(now.getUTCSeconds()).padStart(2, '0') + " GMT";
  
  const headers = {
    "Server": "daiquiri/5",
    "Content-Type": "text/html",
    "Content-Length": "143",
    "Location": "https://itunes.apple.com/lookup?bundleId=com.aoklab.fewerphotos&country=FR",
    "X-Apple-Jingle-Correlation-Key": "CVBAJGG6GMMSCOOOMQIEH6DIRM",
    "x-daiquiri-instance": "daiquiri:12282005:mr47p00it-qujn02122302:7987:25RELEASE27:daiquiri-amp-store-l7shared-ext-001-mr",
    "Date": formattedDate,
    "X-Cache": "TCP_REFRESH_MISS from a95-101-8-184.deploy.akamaitechnologies.com (AkamaiGHost/22.0.0-bb2a2774a48042877147cbed2bad8ca6) (S)",
    "X-True-Cache-Key": "/L/itunes.apple.com/lookup vcd=2897 ci2=bundleId=com.aoklab.fewerphotos&country=FR///",
    "Connection": "keep-alive",
    "X-Cache-Remote": "TCP_MEM_HIT from a95-101-8-182.deploy.akamaitechnologies.com (AkamaiGHost/11.8.3-77160ac4eff0ba0794c5b2db5e229965) (A)",
    "X-Apple-Partner": "origin.0"
  };
  
  // Create a 302 redirect response
  const response = {
    status: 302,
    headers: headers,
    body: "" // Keep empty as this is a redirect
  };
  
  return response;
}

// Export the function to be used by Loon
var $done = mockResponse();
`;

// Full Loon configuration 
const fullConfig = `
#!name=iTunes Lookup Mock
#!desc=Mock response for iTunes lookup API for Fewer Photos app with dynamic date

[Script]
http-response ${targetURL} script-path=${scriptName}.js, requires-body=false, timeout=10, tag=${scriptName}

[MITM]
hostname = ${targetHost}
`;

// Final script file content
console.log(script);
