import sublime
import sublime_plugin
from os.path import relpath

# Inspired by 
# @see https://github.com/bpicolo/CopyRelativePath/blob/master/copy_relative_path.py
# Sublime API
# @see https://www.sublimetext.com/docs/api_reference.html#sublime.View
# Unofficial Docs
# @see https://docs.sublimetext.io/reference/plugins.html
class CopyRelativePathCommand(sublime_plugin.TextCommand):
	def run(self, edit):
		if not self.view.is_valid():
			return

		filename = self.view.file_name()
		folders = sublime.active_window().folders()

		relpaths = [relpath(filename, folder) for folder in folders]
		path = min(relpaths, key=len)
		sublime.set_clipboard(path)
		sublime.status_message('Copied ' + path)
