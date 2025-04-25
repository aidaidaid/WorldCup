export const totalFunction = (data) => {
  return data.map(athlete => {
    const scoresWithTotal = athlete.scores.map(score => ({
      ...score,
      total: (score.D || 0) + (score.E || 0) - (score.Pen || 0)
    }));

    const finalScore = scoresWithTotal.reduce(
      (sum, score) => sum + (score.total || 0), 0
    );

    return {
      ...athlete,
      scores: scoresWithTotal,
      finalScore
    };
  });
};