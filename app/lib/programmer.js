class Programmer {
  constructor(name, language="RUBY") {
    this.name = name;
    this.language = language;
  }

  evangelize() {
    return `${this.name}: ${this.language.toUpperCase()} IS THE BEST LANGUAGE EVER`;
  }
}

function addJavaScript(language) {
  return language + "JavaScript";
}

export var bestLanguages = ["Ruby", "Elixir"];
export default Programmer;
export {addJavaScript};


new Programmer(name);