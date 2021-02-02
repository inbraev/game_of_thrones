export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }
  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error("Couldnt fetch data ");
    }
    return res.json();
  };
  getAllCharacters = async () => {
    const result = await this.getResource("/characters?page=5");
    return result.map(this._transformCharacter);
  };
  getCharacter = async (id) => {
    const result = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(result);
  };
  getAllBooks = async () => {
    const result = await this.getResource("/books?page=5");
    return result.map(this._transformBook);
  };
  getBook = async (id) => {
    const book = await this.getResource(`/books/${id}`);
    return this._transformBook(book);
  };

  getAllHouses = async (id) => {
    const result = await this.getResource("/houses?page=5");
    return result.map(this._transformHouse);
  };
  getHouse = async (id) => {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformHouse(house);
  };
  isSet(data) {
    return data || "No data :(";
  }
  _transformCharacter(char) {
    return {
      id: this._extractId(char),
      name: this.isSet(char.name),
      gender: this.isSet(char.gender),
      born: this.isSet(char.born),
      died: this.isSet(char.died),
      culture: this.isSet(char.culture),
    };
  }
  _extractId(item) {
    const regExp = /\/([0-9]*)$/;
    return item.url.match(regExp)[1];
  }
  _transformHouse(house) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons,
    };
  }

  _transformBook(book) {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publisher: book.publisher,
      released: book.released,
    };
  }
}
