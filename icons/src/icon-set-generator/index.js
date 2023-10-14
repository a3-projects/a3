const generator = require(__dirname + "/generator");

generator.generate("build/optimized**/*.svg", "build/icon-set");
