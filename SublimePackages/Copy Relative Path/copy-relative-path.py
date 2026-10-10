import sublime
import sublime_plugin
from os.path import relpath

# Inspired by 
# @see https://github.com/bpicolo/CopyRelativePath/blob/master/copy_relative_path.py
# Sublime API
# @see https://www.sublimetext.com/docs/api_reference.html#sublime.Window
# Unofficial Docs
# @see https://docs.sublimetext.io/reference/plugins.html
class CopyRelativePathCommand(sublime_plugin.WindowCommand):
	def run(self, paths=None):
		if paths:
			filename = paths[0]
		else:
			view = self.window.active_view()
			if view is None or not view.is_valid():
				return
			filename = view.file_name()

		if not filename:
			return

		folders = self.window.folders()

		relpaths = [relpath(filename, folder) for folder in folders]
		path = min(relpaths, key=len)
		sublime.set_clipboard(path)
		sublime.status_message('Copied ' + path)
