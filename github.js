class Github {
  constructor() {
    this.client_id = '53cd44d2dfc1c4f77bf2';
    this.client_secret = 'd4dc6788b160f18c9fec71deba55d4d5374e8be6';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
