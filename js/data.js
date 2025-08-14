// OKO Teacher Dashboard - Data Layer

// Real-world 6th grade math standards data
const standardsData = {
    // Grade 6 Ratios & Proportional Relationships
    '6.RP.A.1': {
        code: '6.RP.A.1',
        name: 'Understand ratio concepts and use ratio reasoning',
        description: 'Understand the concept of a ratio and use ratio language to describe a ratio relationship between two quantities.',
        grade: 6,
        domain: 'RP',
        difficulty: 'just-right',
        questionCount: 18,
        prerequisites: []
    },
    '6.RP.A.2': {
        code: '6.RP.A.2',
        name: 'Understand unit rate and use it to solve problems',
        description: 'Understand the concept of a unit rate a/b associated with a ratio a:b with b ≠ 0, and use rate language in the context of a ratio relationship.',
        grade: 6,
        domain: 'RP',
        difficulty: 'just-right',
        questionCount: 22,
        prerequisites: ['6.RP.A.1']
    },
    '6.RP.A.3': {
        code: '6.RP.A.3',
        name: 'Use ratio and rate reasoning to solve problems',
        description: 'Use ratio and rate reasoning to solve real-world and mathematical problems, including making tables of equivalent ratios.',
        grade: 6,
        domain: 'RP',
        difficulty: 'just-right',
        questionCount: 25,
        prerequisites: ['6.RP.A.2']
    },
    
    // Grade 6 The Number System
    '6.NS.A.1': {
        code: '6.NS.A.1',
        name: 'Interpret and compute quotients of fractions',
        description: 'Interpret and compute quotients of fractions, and solve word problems involving division of fractions by fractions.',
        grade: 6,
        domain: 'NS',
        difficulty: 'too-hard',
        questionCount: 20,
        prerequisites: []
    },
    '6.NS.B.2': {
        code: '6.NS.B.2',
        name: 'Fluently divide multi-digit numbers',
        description: 'Fluently divide multi-digit numbers using the standard algorithm.',
        grade: 6,
        domain: 'NS',
        difficulty: 'just-right',
        questionCount: 16,
        prerequisites: []
    },
    '6.NS.B.3': {
        code: '6.NS.B.3',
        name: 'Add, subtract, multiply, and divide decimals',
        description: 'Fluently add, subtract, multiply, and divide multi-digit decimals using the standard algorithm for each operation.',
        grade: 6,
        domain: 'NS',
        difficulty: 'just-right',
        questionCount: 24,
        prerequisites: []
    },
    '6.NS.C.5': {
        code: '6.NS.C.5',
        name: 'Understand positive and negative numbers',
        description: 'Understand that positive and negative numbers are used together to describe quantities having opposite directions or values.',
        grade: 6,
        domain: 'NS',
        difficulty: 'just-right',
        questionCount: 19,
        prerequisites: []
    },
    '6.NS.C.6': {
        code: '6.NS.C.6',
        name: 'Understand rational numbers on the coordinate plane',
        description: 'Understand a rational number as a point on the number line and extend number line diagrams to coordinate axes.',
        grade: 6,
        domain: 'NS',
        difficulty: 'just-right',
        questionCount: 21,
        prerequisites: ['6.NS.C.5']
    },
    '6.NS.C.7': {
        code: '6.NS.C.7',
        name: 'Order and find absolute value of rational numbers',
        description: 'Understand ordering and absolute value of rational numbers and interpret statements about order in real-world contexts.',
        grade: 6,
        domain: 'NS',
        difficulty: 'just-right',
        questionCount: 17,
        prerequisites: ['6.NS.C.6']
    },
    '6.NS.C.8': {
        code: '6.NS.C.8',
        name: 'Solve problems by graphing points in all four quadrants',
        description: 'Solve real-world and mathematical problems by graphing points in all four quadrants of the coordinate plane.',
        grade: 6,
        domain: 'NS',
        difficulty: 'just-right',
        questionCount: 23,
        prerequisites: ['6.NS.C.6']
    },
    
    // Grade 6 Expressions & Equations
    '6.EE.A.1': {
        code: '6.EE.A.1',
        name: 'Write and evaluate numerical expressions with exponents',
        description: 'Write and evaluate numerical expressions involving whole-number exponents.',
        grade: 6,
        domain: 'EE',
        difficulty: 'just-right',
        questionCount: 18,
        prerequisites: []
    },
    '6.EE.A.2': {
        code: '6.EE.A.2',
        name: 'Write, read, and evaluate expressions with variables',
        description: 'Write, read, and evaluate expressions in which letters stand for numbers.',
        grade: 6,
        domain: 'EE',
        difficulty: 'just-right',
        questionCount: 22,
        prerequisites: []
    },
    '6.EE.A.3': {
        code: '6.EE.A.3',
        name: 'Apply properties of operations to generate equivalent expressions',
        description: 'Apply the properties of operations to generate equivalent expressions.',
        grade: 6,
        domain: 'EE',
        difficulty: 'too-hard',
        questionCount: 26,
        prerequisites: ['6.EE.A.2']
    },
    '6.EE.A.4': {
        code: '6.EE.A.4',
        name: 'Identify equivalent expressions',
        description: 'Identify when two expressions are equivalent (i.e., when the two expressions name the same number regardless of which value is substituted).',
        grade: 6,
        domain: 'EE',
        difficulty: 'just-right',
        questionCount: 20,
        prerequisites: ['6.EE.A.3']
    },
    '6.EE.B.5': {
        code: '6.EE.B.5',
        name: 'Understand solving equations and inequalities',
        description: 'Understand solving an equation or inequality as a process of answering a question: which values from a specified set make the equation or inequality true?',
        grade: 6,
        domain: 'EE',
        difficulty: 'just-right',
        questionCount: 15,
        prerequisites: ['6.EE.A.2']
    },
    '6.EE.B.6': {
        code: '6.EE.B.6',
        name: 'Write expressions and equations from word problems',
        description: 'Use variables to represent numbers and write expressions when solving a real-world or mathematical problem.',
        grade: 6,
        domain: 'EE',
        difficulty: 'just-right',
        questionCount: 24,
        prerequisites: ['6.EE.A.2']
    },
    '6.EE.B.7': {
        code: '6.EE.B.7',
        name: 'Solve real-world problems using equations and inequalities',
        description: 'Solve real-world and mathematical problems by writing and solving equations of the form x + p = q and px = q.',
        grade: 6,
        domain: 'EE',
        difficulty: 'just-right',
        questionCount: 28,
        prerequisites: ['6.EE.B.6']
    },
    
    // Grade 6 Geometry
    '6.G.A.1': {
        code: '6.G.A.1',
        name: 'Find area of triangles and quadrilaterals',
        description: 'Find the area of right triangles, other triangles, special quadrilaterals, and polygons by composing into rectangles or decomposing into triangles.',
        grade: 6,
        domain: 'G',
        difficulty: 'just-right',
        questionCount: 21,
        prerequisites: []
    },
    '6.G.A.2': {
        code: '6.G.A.2',
        name: 'Find volume of rectangular prisms with fractional edge lengths',
        description: 'Find the volume of a right rectangular prism with fractional edge lengths by packing it with unit cubes.',
        grade: 6,
        domain: 'G',
        difficulty: 'just-right',
        questionCount: 17,
        prerequisites: []
    },
    '6.G.A.3': {
        code: '6.G.A.3',
        name: 'Draw polygons in the coordinate plane',
        description: 'Draw polygons in the coordinate plane given coordinates for the vertices; use coordinates to find the length of a side.',
        grade: 6,
        domain: 'G',
        difficulty: 'just-right',
        questionCount: 19,
        prerequisites: ['6.NS.C.8']
    },
    '6.G.A.4': {
        code: '6.G.A.4',
        name: 'Represent three-dimensional figures using nets',
        description: 'Represent three-dimensional figures using nets made up of rectangles and triangles, and use the nets to find the surface area.',
        grade: 6,
        domain: 'G',
        difficulty: 'just-right',
        questionCount: 16,
        prerequisites: ['6.G.A.1']
    },
    
    // Grade 6 Statistics & Probability
    '6.SP.A.1': {
        code: '6.SP.A.1',
        name: 'Recognize statistical questions',
        description: 'Recognize a statistical question as one that anticipates variability in the data related to the question.',
        grade: 6,
        domain: 'SP',
        difficulty: 'just-right',
        questionCount: 14,
        prerequisites: []
    },
    '6.SP.A.2': {
        code: '6.SP.A.2',
        name: 'Understand center, spread, and shape of data distributions',
        description: 'Understand that a set of data collected to answer a statistical question has a distribution which can be described by its center, spread, and overall shape.',
        grade: 6,
        domain: 'SP',
        difficulty: 'just-right',
        questionCount: 18,
        prerequisites: ['6.SP.A.1']
    },
    '6.SP.A.3': {
        code: '6.SP.A.3',
        name: 'Recognize measures of center and variability',
        description: 'Recognize that a measure of center for a numerical data set summarizes all of its values with a single number.',
        grade: 6,
        domain: 'SP',
        difficulty: 'just-right',
        questionCount: 20,
        prerequisites: ['6.SP.A.2']
    },
    '6.SP.B.4': {
        code: '6.SP.B.4',
        name: 'Display numerical data in dot plots, histograms, and box plots',
        description: 'Display numerical data in plots on a number line, including dot plots, histograms, and box plots.',
        grade: 6,
        domain: 'SP',
        difficulty: 'too-hard',
        questionCount: 22,
        prerequisites: ['6.SP.A.3']
    },
    '6.SP.B.5': {
        code: '6.SP.B.5',
        name: 'Summarize numerical datasets using measures of center and spread',
        description: 'Summarize numerical data sets in relation to their context by reporting the number of observations and describing the nature of the data.',
        grade: 6,
        domain: 'SP',
        difficulty: 'just-right',
        questionCount: 19,
        prerequisites: ['6.SP.A.3']
    },
    '6.SP.B.5c': {
        code: '6.SP.B.5c',
        name: 'Summarize and describe distributions',
        description: 'Part c: Giving quantitative measures of center (median and/or mean) and variability (interquartile range and/or mean absolute deviation), as well as describing any overall pattern and any striking deviations from the overall pattern with reference to the context in which the data were gathered.',
        grade: 6,
        domain: 'SP',
        difficulty: 'just-right',
        questionCount: 24,
        prerequisites: ['6.SP.B.5'],
        cluster: 'Summarize and describe distributions'
    },
    
    // Grade 7 - Advanced for 6th grade class
    '7.EE.A.1': {
        code: '7.EE.A.1',
        name: 'Apply properties of operations as strategies to add, subtract, factor, and expand linear expressions',
        description: 'Apply properties of operations as strategies to add, subtract, factor, and expand linear expressions with rational coefficients.',
        grade: 7,
        domain: 'EE',
        difficulty: 'too-hard',
        questionCount: 28,
        prerequisites: ['6.EE.A.3'],
        cluster: 'Use properties of operations to generate equivalent expressions'
    },
    
    // Grade 5 - Below grade level for remediation
    '5.NF.A.2': {
        code: '5.NF.A.2',
        name: 'Solve word problems involving addition and subtraction of fractions',
        description: 'Solve word problems involving addition and subtraction of fractions referring to the same whole, including cases of unlike denominators.',
        grade: 5,
        domain: 'NF',
        difficulty: 'too-easy',
        questionCount: 22,
        prerequisites: ['5.NF.A.1'],
        cluster: 'Use equivalent fractions as a strategy to add and subtract fractions'
    }
};

// Group templates for quick creation
const groupTemplates = {
    'fractions-basic': {
        name: 'Fractions Group',
        standard: '5.NF.A.1',
        standardName: 'Add and subtract fractions with unlike denominators',
        grade: 5,
        duration: 15
    },
    'area-perimeter': {
        name: 'Area & Perimeter Group',
        standard: '4.MD.A.3',
        standardName: 'Apply area and perimeter formulas for rectangles',
        grade: 4,
        duration: 20
    },
    'decimal-operations': {
        name: 'Decimal Operations Group',
        standard: '5.NBT.B.7',
        standardName: 'Add, subtract, multiply, and divide decimals to hundredths',
        grade: 5,
        duration: 15
    },
    'ratios-proportions': {
        name: 'Ratios & Proportions Group',
        standard: '6.RP.A.1',
        standardName: 'Understand ratio concepts and use ratio reasoning',
        grade: 6,
        duration: 20
    },
    'volume-measurement': {
        name: 'Volume & Measurement Group',
        standard: '5.MD.C.5',
        standardName: 'Relate volume to multiplication and addition',
        grade: 5,
        duration: 15
    },
    'algebraic-expressions': {
        name: 'Algebraic Expressions Group',
        standard: '6.EE.A.2',
        standardName: 'Write, read, and evaluate expressions',
        grade: 6,
        duration: 20
    }
};

// Recently used standards (would be persisted in real app)
const recentlyUsedStandards = [
    '5.NF.A.1',
    '5.MD.C.5', 
    '4.MD.A.3'
];

// Fixed group slots - 5 slots with diverse, realistic 6th grade group data
const groupSlots = [
    {
        id: 1,
        name: "Statistics & Probability Group", 
        standard: '6.SP.B.5c',
        grade: 6,
        domain: 'SP',
        cluster: 'Summarize and describe distributions',
        status: 'ready',
        studentCount: 3,
        maxStudents: 5,
        sessionLength: { min: 15, max: 20 },
        questionCount: 24,
        studentCode: 'M2YJY',
        url: 'https://app.okolabs.ai?code=M2YJY'
    },
    {
        id: 2,
        name: "Ratios & Proportions Group",
        standard: '6.RP.A.1',
        grade: 6,
        domain: 'RP',
        cluster: 'Understand ratio concepts and use ratio reasoning',
        status: 'ready',
        studentCount: 4,
        maxStudents: 5,
        sessionLength: { min: 20, max: 25 },
        questionCount: 18,
        studentCode: 'K8PQ9',
        url: 'https://app.okolabs.ai?code=K8PQ9'
    },
    {
        id: 3,
        name: "Expressions & Equations Group",
        standard: '6.EE.A.2',
        grade: 6,
        domain: 'EE',
        cluster: 'Write, read, and evaluate expressions in which letters stand for numbers',
        status: 'ready',
        studentCount: 2,
        maxStudents: 5,
        sessionLength: { min: 20, max: 25 },
        questionCount: 22,
        studentCode: 'H3M7X',
        url: 'https://app.okolabs.ai?code=H3M7X'
    },
    {
        id: 4,
        name: "Number System Group",
        standard: '6.NS.C.6',
        grade: 6,
        domain: 'NS',
        cluster: 'Understand a rational number as a point on the number line',
        status: 'ready',
        studentCount: 5,
        maxStudents: 5,
        sessionLength: { min: 15, max: 20 },
        questionCount: 21,
        studentCode: 'B9VF2',
        url: 'https://app.okolabs.ai?code=B9VF2'
    },
    {
        id: 5,
        name: "Geometry Group",
        standard: '6.G.A.1',
        grade: 6,
        domain: 'G',
        cluster: 'Find the area of right triangles, other triangles, special quadrilaterals, and polygons',
        status: 'ready',
        studentCount: 3,
        maxStudents: 5,
        sessionLength: { min: 20, max: 25 },
        questionCount: 21,
        studentCode: 'L6T8R',
        url: 'https://app.okolabs.ai?code=L6T8R'
    }
];

// Domain mapping for auto-generating group names
const domainNames = {
    'NF': 'Number & Operations - Fractions',
    'MD': 'Measurement & Data',
    'NBT': 'Number & Operations in Base Ten',
    'RP': 'Ratios & Proportional Relationships',
    'EE': 'Expressions & Equations',
    'SP': 'Statistics & Probability',
    'NS': 'The Number System',
    'G': 'Geometry'
};

// Helper function to generate student codes
function generateStudentCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Helper function to generate student URL from code
function generateStudentUrl(code) {
    return `https://app.okolabs.ai?code=${code}`;
}

// Helper function to auto-generate group name from standard
function generateGroupName(standard) {
    if (!standard || !standardsData[standard]) return null;
    
    const standardInfo = standardsData[standard];
    const grade = standardInfo.grade;
    const domainName = domainNames[standardInfo.domain] || standardInfo.domain;
    const standardName = standardInfo.name;
    
    return `Grade ${grade} – ${domainName} – ${standardName}`;
}

// Example questions data for each group (3 questions per standard)
const exampleQuestions = {
    '6.SP.B.5c': [
        {
            id: 1,
            title: "Problem 1: Delivery Times",
            problemText: "A local bakery recorded the time (in minutes) it took to deliver 10 orders: 15, 18, 16, 20, 22, 19, 17, 24, 30, 18.",
            questionText: "Which statement best summarizes the delivery times?",
            type: "multiple-choice",
            choices: [
                {
                    letter: "a)",
                    text: "The median delivery time is 19 minutes, with an interquartile range of 6 minutes; delivery times are fairly consistent except for one long delivery (an outlier)."
                },
                {
                    letter: "b)",
                    text: "The mean delivery time is approximately 20 minutes, the IQR is about 4 minutes, and times are evenly spread."
                },
                {
                    letter: "c)",
                    text: "The median is 18 minutes, IQR is 14 minutes, showing extreme variability."
                },
                {
                    letter: "d)",
                    text: "The mean is 19 minutes, and there are no unusual deviations."
                }
            ],
            correctAnswer: "A"
        },
        {
            id: 2,
            title: "Problem 2: Test Scores",
            problemText: "Ms. Johnson recorded her class's test scores (out of 100): 92, 88, 76, 94, 85, 91, 82, 89, 90, 87, 84, 93.",
            questionText: "What can you conclude about the distribution of test scores?",
            type: "multiple-choice",
            choices: [
                {
                    letter: "a)",
                    text: "The mean is 87.5 with high variability and several outliers."
                },
                {
                    letter: "b)",
                    text: "The median is 88.5, mean is about 87.6, showing a fairly consistent performance with most scores clustering around the center."
                },
                {
                    letter: "c)",
                    text: "The data shows extreme spread with no clear center."
                },
                {
                    letter: "d)",
                    text: "All students performed equally well."
                }
            ],
            correctAnswer: "B"
        },
        {
            id: 3,
            title: "Problem 3: Plant Heights",
            problemText: "A gardener measured the heights (in cm) of 8 tomato plants: 45, 52, 48, 61, 49, 47, 50, 46.",
            questionText: "Which measure of center and variability best describes this data?",
            type: "multiple-choice",
            choices: [
                {
                    letter: "a)",
                    text: "Mean = 49.75 cm, range = 16 cm, with most plants close to average height except one notably taller plant."
                },
                {
                    letter: "b)",
                    text: "Median = 50 cm, no variability present in the data."
                },
                {
                    letter: "c)",
                    text: "The data is too spread out to find meaningful measures."
                },
                {
                    letter: "d)",
                    text: "Mean = 45 cm with extreme outliers throughout."
                }
            ],
            correctAnswer: "A"
        }
    ],
    '6.RP.A.1': [
        {
            id: 1,
            title: "Problem 1: Recipe Ratios",
            problemText: "A cookie recipe calls for 3 cups of flour and 2 cups of sugar.",
            questionText: "What is the ratio of flour to sugar in this recipe?",
            type: "multiple-choice",
            choices: [
                {
                    letter: "a)",
                    text: "2:3"
                },
                {
                    letter: "b)",
                    text: "3:2"
                },
                {
                    letter: "c)",
                    text: "5:1"
                },
                {
                    letter: "d)",
                    text: "1:5"
                }
            ],
            correctAnswer: "B"
        },
        {
            id: 2,
            title: "Problem 2: Color Marbles",
            problemText: "In a bag, there are 12 red marbles and 8 blue marbles.",
            questionText: "What is the ratio of red marbles to blue marbles?",
            type: "multiple-choice",
            choices: [
                {
                    letter: "a)",
                    text: "8:12"
                },
                {
                    letter: "b)",
                    text: "12:8"
                },
                {
                    letter: "c)",
                    text: "3:2"
                },
                {
                    letter: "d)",
                    text: "Both B and C are correct"
                }
            ],
            correctAnswer: "D"
        },
        {
            id: 3,
            title: "Problem 3: Student Groups",
            problemText: "In a classroom, there are 15 boys and 10 girls.",
            questionText: "What ratio represents the relationship between boys and the total number of students?",
            type: "multiple-choice",
            choices: [
                {
                    letter: "a)",
                    text: "15:10"
                },
                {
                    letter: "b)",
                    text: "15:25"
                },
                {
                    letter: "c)",
                    text: "10:25"
                },
                {
                    letter: "d)",
                    text: "3:5"
                }
            ],
            correctAnswer: "B"
        }
    ],
    '6.EE.A.2': [
        {
            id: 1,
            title: "Problem 1: Age Expression",
            problemText: "Let x represent Maria's age now.",
            questionText: "Which expression represents Maria's age 5 years from now?",
            type: "multiple-choice",
            choices: [
                {
                    letter: "a)",
                    text: "x - 5"
                },
                {
                    letter: "b)",
                    text: "x + 5"
                },
                {
                    letter: "c)",
                    text: "5x"
                },
                {
                    letter: "d)",
                    text: "5 - x"
                }
            ],
            correctAnswer: "B"
        },
        {
            id: 2,
            title: "Problem 2: Shopping Cost",
            problemText: "Sarah buys n notebooks that cost $3 each and 2 pens that cost $1.50 each.",
            questionText: "Which expression represents the total cost?",
            type: "multiple-choice",
            choices: [
                {
                    letter: "a)",
                    text: "3n + 3"
                },
                {
                    letter: "b)",
                    text: "3n + 1.50"
                },
                {
                    letter: "c)",
                    text: "3n + 2(1.50)"
                },
                {
                    letter: "d)",
                    text: "3n + 2 + 1.50"
                }
            ],
            correctAnswer: "C"
        },
        {
            id: 3,
            title: "Problem 3: Perimeter Expression",
            problemText: "A rectangle has length (x + 4) and width (x - 2).",
            questionText: "What is the expression for the perimeter of this rectangle?",
            type: "multiple-choice",
            choices: [
                {
                    letter: "a)",
                    text: "2x + 2"
                },
                {
                    letter: "b)",
                    text: "4x + 4"
                },
                {
                    letter: "c)",
                    text: "2(x + 4) + 2(x - 2)"
                },
                {
                    letter: "d)",
                    text: "Both B and C are correct"
                }
            ],
            correctAnswer: "D"
        }
    ],
    '6.NS.C.6': [
        {
            id: 1,
            title: "Problem 1: Number Line Position",
            problemText: "Point A is located at -3 on a number line.",
            questionText: "Which statement about point A is correct?",
            type: "multiple-choice",
            choices: [
                {
                    letter: "a)",
                    text: "Point A is 3 units to the right of zero"
                },
                {
                    letter: "b)",
                    text: "Point A is 3 units to the left of zero"
                },
                {
                    letter: "c)",
                    text: "Point A is the same as positive 3"
                },
                {
                    letter: "d)",
                    text: "Point A cannot be placed on a number line"
                }
            ],
            correctAnswer: "B"
        },
        {
            id: 2,
            title: "Problem 2: Coordinate Plane",
            problemText: "Point B is located at coordinates (-2, 4) on a coordinate plane.",
            questionText: "In which quadrant is point B located?",
            type: "multiple-choice",
            choices: [
                {
                    letter: "a)",
                    text: "Quadrant I"
                },
                {
                    letter: "b)",
                    text: "Quadrant II"
                },
                {
                    letter: "c)",
                    text: "Quadrant III"
                },
                {
                    letter: "d)",
                    text: "Quadrant IV"
                }
            ],
            correctAnswer: "B"
        },
        {
            id: 3,
            title: "Problem 3: Opposite Numbers",
            problemText: "Consider the numbers 7 and -7.",
            questionText: "What is the relationship between these two numbers?",
            type: "multiple-choice",
            choices: [
                {
                    letter: "a)",
                    text: "They are the same number"
                },
                {
                    letter: "b)",
                    text: "They are opposites and the same distance from zero"
                },
                {
                    letter: "c)",
                    text: "-7 is farther from zero than 7"
                },
                {
                    letter: "d)",
                    text: "They cannot both exist on the same number line"
                }
            ],
            correctAnswer: "B"
        }
    ],
    '6.G.A.1': [
        {
            id: 1,
            title: "Problem 1: Triangle Area",
            problemText: "A right triangle has a base of 8 cm and a height of 6 cm.",
            questionText: "What is the area of this triangle?",
            type: "multiple-choice",
            choices: [
                {
                    letter: "a)",
                    text: "14 cm²"
                },
                {
                    letter: "b)",
                    text: "24 cm²"
                },
                {
                    letter: "c)",
                    text: "28 cm²"
                },
                {
                    letter: "d)",
                    text: "48 cm²"
                }
            ],
            correctAnswer: "B"
        },
        {
            id: 2,
            title: "Problem 2: Parallelogram Area",
            problemText: "A parallelogram has a base of 10 meters and a height of 7 meters.",
            questionText: "What is the area of this parallelogram?",
            type: "multiple-choice",
            choices: [
                {
                    letter: "a)",
                    text: "17 m²"
                },
                {
                    letter: "b)",
                    text: "34 m²"
                },
                {
                    letter: "c)",
                    text: "70 m²"
                },
                {
                    letter: "d)",
                    text: "140 m²"
                }
            ],
            correctAnswer: "C"
        },
        {
            id: 3,
            title: "Problem 3: Composite Shape",
            problemText: "A shape is made by combining a rectangle (4 cm × 6 cm) with a triangle (base 4 cm, height 3 cm) on top.",
            questionText: "What is the total area of this composite shape?",
            type: "multiple-choice",
            choices: [
                {
                    letter: "a)",
                    text: "30 cm²"
                },
                {
                    letter: "b)",
                    text: "24 cm²"
                },
                {
                    letter: "c)",
                    text: "18 cm²"
                },
                {
                    letter: "d)",
                    text: "36 cm²"
                }
            ],
            correctAnswer: "A"
        }
    ]
};