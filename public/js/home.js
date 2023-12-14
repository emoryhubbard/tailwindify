import {select} from './utils.mjs'

select('.convert-css-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonData = {};

    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    const response = await fetch('/api/tailwind', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    });

    const json = await response.json();
    console.log(json)
    if (json.result)
      select('.output-html').value = json.result
    if (!json.result)
      select('.create-account').textContent = "Sorry, there was an error converting the code. Check if pasted HTML and CSS code is valid, and see the How It Works page for any other caveats."
  });