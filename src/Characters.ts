class Characters {
    public static byKey(key: string): string {
      return Characters.charMap[key];
    }
    
    private static charMap: { [key: string]: string } = {
      empty: " ", wall: "#",
      uicorner: "+", uivert: "|", uihori: "-"
    };
}

export default Characters.byKey;
