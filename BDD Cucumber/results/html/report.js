$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/whatfixhomepage.feature");
formatter.feature({
  "name": "whatfix page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User must open the given URL and navigate to Customers, Pricing, Partners, and Resources.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am on whatfix page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.stepdefinitionfile.I_am_on_whatfix_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify website is opened",
  "keyword": "When "
});
formatter.match({
  "location": "steps.stepdefinitionfile.i_verify_website_is_opened()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d95.0.4638.69)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-00K4GI6E\u0027, ip: \u0027192.168.0.110\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.69, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: C:\\Users\\SHABEE~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52765}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 403f36204891b3d01bf93defc1e2e849\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat steps.stepdefinitionfile.i_verify_website_is_opened(stepdefinitionfile.java:49)\r\n\tat ???.I verify website is opened(file:///C:/Users/Shabeen%20N/eclipse-workspace/bddcucumber/src/test/java/features/whatfixhomepage.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on customer link and verify",
  "keyword": "And "
});
formatter.match({
  "location": "steps.stepdefinitionfile.i_click_on_customer_link_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Pricing and verify",
  "keyword": "And "
});
formatter.match({
  "location": "steps.stepdefinitionfile.click_on_Pricing_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Resources and verify",
  "keyword": "And "
});
formatter.match({
  "location": "steps.stepdefinitionfile.click_on_Resources_and_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Partners and verify",
  "keyword": "And "
});
formatter.match({
  "location": "steps.stepdefinitionfile.click_on_Partners_and_verify()"
});
formatter.result({
  "status": "skipped"
});
});