describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerInfo() with empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update #servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(2);
    expect(curTdList[0].innerHTML).toEqual('Alice');
    expect(curTdList[1].innerHTML).toEqual('$0.00');
   
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});

// expect(curTdList[2].innerText).toEqual('X');