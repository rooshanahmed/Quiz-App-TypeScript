export const fetchQuestions = async(amount: number, difficulty: Difficulty ) => {
    const endPoint = `https://opentdb.com/api.php?`
}

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}