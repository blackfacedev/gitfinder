class Github {
  constructor() {
    this.client_id = '53cd44d2dfc1c4f77bf2';
    this.client_secret = 'd4dc6788b160f18c9fec71deba55d4d5374e8be6';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
