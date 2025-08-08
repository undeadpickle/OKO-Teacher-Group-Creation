// OKO Teacher Dashboard - Data Layer

// Mock standards data
const standardsData = {
    '4.MD.A.3': {
        code: '4.MD.A.3',
        name: 'Apply area and perimeter formulas for rectangles',
        description: 'Apply the area and perimeter formulas for rectangles in real world and mathematical problems.',
        grade: 4,
        domain: 'MD',
        difficulty: 'just-right',
        questionCount: 18,
        prerequisites: []
    },
    '4.NF.B.4': {
        code: '4.NF.B.4',
        name: 'Multiply a fraction by a whole number',
        description: 'Apply and extend previous understandings of multiplication to multiply a fraction by a whole number.',
        grade: 4,
        domain: 'NF',
        difficulty: 'too-easy',
        questionCount: 15,
        prerequisites: []
    },
    '5.NF.A.1': {
        code: '5.NF.A.1',
        name: 'Add and subtract fractions with unlike denominators',
        description: 'Add and subtract fractions with unlike denominators (including mixed numbers) by replacing given fractions with equivalent fractions in such a way as to produce an equivalent sum or difference of fractions with like denominators.',
        grade: 5,
        domain: 'NF',
        difficulty: 'just-right',
        questionCount: 24,
        prerequisites: ['4.NF.B.4']
    },
    '5.NF.B.4': {
        code: '5.NF.B.4',
        name: 'Apply and extend previous understandings of multiplication to multiply a fraction',
        description: 'Apply and extend previous understandings of multiplication to multiply a fraction or whole number by a fraction.',
        grade: 5,
        domain: 'NF',
        difficulty: 'too-hard',
        questionCount: 21,
        prerequisites: ['5.NF.A.1', '4.NF.B.4']
    },
    '5.MD.C.5': {
        code: '5.MD.C.5',
        name: 'Relate volume to multiplication and addition',
        description: 'Relate volume to the operations of multiplication and addition and solve real world and mathematical problems involving volume.',
        grade: 5,
        domain: 'MD',
        difficulty: 'just-right',
        questionCount: 19,
        prerequisites: ['4.MD.A.3']
    },
    '5.NBT.B.7': {
        code: '5.NBT.B.7',
        name: 'Add, subtract, multiply, and divide decimals to hundredths',
        description: 'Add, subtract, multiply, and divide decimals to hundredths, using concrete models or drawings and strategies based on place value, properties of operations, and/or the relationship between addition and subtraction.',
        grade: 5,
        domain: 'NBT',
        difficulty: 'just-right',
        questionCount: 27,
        prerequisites: []
    },
    '6.RP.A.1': {
        code: '6.RP.A.1',
        name: 'Understand ratio concepts and use ratio reasoning',
        description: 'Understand the concept of a ratio and use ratio language to describe a ratio relationship between two quantities.',
        grade: 6,
        domain: 'RP',
        difficulty: 'too-hard',
        questionCount: 16,
        prerequisites: ['5.NBT.B.7', '5.NF.A.1']
    },
    '6.EE.A.2': {
        code: '6.EE.A.2',
        name: 'Write, read, and evaluate expressions',
        description: 'Write, read, and evaluate expressions in which letters stand for numbers.',
        grade: 6,
        domain: 'EE',
        difficulty: 'just-right',
        questionCount: 22,
        prerequisites: ['5.NBT.B.7']
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