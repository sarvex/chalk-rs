(function() {var implementors = {
"chalk_engine":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"chalk_engine/struct.TableIndex.html\" title=\"struct chalk_engine::TableIndex\">TableIndex</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"chalk_engine/stack/struct.StackIndex.html\" title=\"struct chalk_engine::stack::StackIndex\">StackIndex</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"chalk_engine/table/struct.AnswerIndex.html\" title=\"struct chalk_engine::table::AnswerIndex\">AnswerIndex</a>"]],
"chalk_integration":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.69.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + 'static, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.69.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"chalk_integration/error/struct.ChalkError.html\" title=\"struct chalk_integration::error::ChalkError\">ChalkError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"chalk_integration/error/enum.RustIrError.html\" title=\"enum chalk_integration::error::RustIrError\">RustIrError</a>&gt; for <a class=\"struct\" href=\"chalk_integration/error/struct.ChalkError.html\" title=\"struct chalk_integration::error::ChalkError\">ChalkError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"chalk_solve/wf/enum.WfError.html\" title=\"enum chalk_solve::wf::WfError\">WfError</a>&lt;<a class=\"struct\" href=\"chalk_integration/interner/struct.ChalkIr.html\" title=\"struct chalk_integration::interner::ChalkIr\">ChalkIr</a>&gt;&gt; for <a class=\"struct\" href=\"chalk_integration/error/struct.ChalkError.html\" title=\"struct chalk_integration::error::ChalkError\">ChalkError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"chalk_solve/coherence/enum.CoherenceError.html\" title=\"enum chalk_solve::coherence::CoherenceError\">CoherenceError</a>&lt;<a class=\"struct\" href=\"chalk_integration/interner/struct.ChalkIr.html\" title=\"struct chalk_integration::interner::ChalkIr\">ChalkIr</a>&gt;&gt; for <a class=\"struct\" href=\"chalk_integration/error/struct.ChalkError.html\" title=\"struct chalk_integration::error::ChalkError\">ChalkError</a>"]],
"chalk_ir":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.69.0/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"chalk_ir/struct.InferenceVar.html\" title=\"struct chalk_ir::InferenceVar\">InferenceVar</a>"],["impl&lt;T: <a class=\"trait\" href=\"chalk_ir/interner/trait.HasInterner.html\" title=\"trait chalk_ir::interner::HasInterner\">HasInterner</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"chalk_ir/struct.Binders.html\" title=\"struct chalk_ir::Binders\">Binders</a>&lt;T&gt;&gt; for (<a class=\"struct\" href=\"chalk_ir/struct.VariableKinds.html\" title=\"struct chalk_ir::VariableKinds\">VariableKinds</a>&lt;T::<a class=\"associatedtype\" href=\"chalk_ir/interner/trait.HasInterner.html#associatedtype.Interner\" title=\"type chalk_ir::interner::HasInterner::Interner\">Interner</a>&gt;, T)"],["impl&lt;I: <a class=\"trait\" href=\"chalk_ir/interner/trait.Interner.html\" title=\"trait chalk_ir::interner::Interner\">Interner</a>, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"chalk_ir/struct.WithKind.html\" title=\"struct chalk_ir::WithKind\">WithKind</a>&lt;I, T&gt;&gt; for (<a class=\"enum\" href=\"chalk_ir/enum.VariableKind.html\" title=\"enum chalk_ir::VariableKind\">VariableKind</a>&lt;I&gt;, T)"]],
"chalk_solve":[["impl&lt;I: Interner&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;FnDefId&lt;I&gt;&gt; for <a class=\"enum\" href=\"chalk_solve/logging_db/enum.RecordedItemId.html\" title=\"enum chalk_solve::logging_db::RecordedItemId\">RecordedItemId</a>&lt;I&gt;"],["impl&lt;I: Interner&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"chalk_solve/infer/var/struct.EnaVariable.html\" title=\"struct chalk_solve::infer::var::EnaVariable\">EnaVariable</a>&lt;I&gt;&gt; for InferenceVar"],["impl&lt;I: Interner&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;OpaqueTyId&lt;I&gt;&gt; for <a class=\"enum\" href=\"chalk_solve/logging_db/enum.RecordedItemId.html\" title=\"enum chalk_solve::logging_db::RecordedItemId\">RecordedItemId</a>&lt;I&gt;"],["impl&lt;I: Interner&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;TraitId&lt;I&gt;&gt; for <a class=\"enum\" href=\"chalk_solve/logging_db/enum.RecordedItemId.html\" title=\"enum chalk_solve::logging_db::RecordedItemId\">RecordedItemId</a>&lt;I&gt;"],["impl&lt;I: Interner&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ImplId&lt;I&gt;&gt; for <a class=\"enum\" href=\"chalk_solve/logging_db/enum.RecordedItemId.html\" title=\"enum chalk_solve::logging_db::RecordedItemId\">RecordedItemId</a>&lt;I&gt;"],["impl&lt;I: Interner&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;GeneratorId&lt;I&gt;&gt; for <a class=\"enum\" href=\"chalk_solve/logging_db/enum.RecordedItemId.html\" title=\"enum chalk_solve::logging_db::RecordedItemId\">RecordedItemId</a>&lt;I&gt;"],["impl&lt;I: Interner&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;InferenceVar&gt; for <a class=\"struct\" href=\"chalk_solve/infer/var/struct.EnaVariable.html\" title=\"struct chalk_solve::infer::var::EnaVariable\">EnaVariable</a>&lt;I&gt;"],["impl&lt;I: Interner&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;AdtId&lt;I&gt;&gt; for <a class=\"enum\" href=\"chalk_solve/logging_db/enum.RecordedItemId.html\" title=\"enum chalk_solve::logging_db::RecordedItemId\">RecordedItemId</a>&lt;I&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()