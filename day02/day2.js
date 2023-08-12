$(document).ready(function() {
  $('#addItemButton').on('click', function() {
    var newItem = $('#inputField').val();
    if (newItem !== '') {
      $('.first-ul').append('<li>' + newItem + '</li>');
      $('#inputField').val('');
    }
  });
  var selectedListItem = null;
  $(document).on('click', '.first-ul li', function() {
    selectedListItem = $(this);
  });
  $('#moveItemsButton').on('click', function() {
    if (selectedListItem !== null) {
      var itemText = selectedListItem.text();
      $('.second-ul').append('<li>' + itemText + '</li>');
      selectedListItem.remove();
      selectedListItem = null;
    }
  });
});



/* using ajax */
$(document).ready(function() {
  $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET',
      success: function(data) {
          const tableBody = $('#data-table tbody');
          data.forEach(function(item) {
              const row = `
                  <tr>
                      <td>${item.id}</td>
                      <td>${item.name}</td>
                      <td>${item.username}</td>
                      <td>${item.email}</td>
                      <td>${item.phone}</td>
                      <td>${item.website}</td>
                  </tr>
              `;
              tableBody.append(row);
          });
      },
  });
});



/* using fetch */


document.addEventListener('DOMContentLoaded', async function () {
  const tableBody = document.querySelector('#data-table2 tbody');

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  data.forEach(item => {
      const row = `
          <tr>
              <td>${item.id}</td>
              <td>${item.name}</td>
              <td>${item.username}</td>
              <td>${item.email}</td>
              <td>${item.phone}</td>
              <td>${item.website}</td>
          </tr>
      `;
      tableBody.insertAdjacentHTML('beforeend', row);
  });

});

