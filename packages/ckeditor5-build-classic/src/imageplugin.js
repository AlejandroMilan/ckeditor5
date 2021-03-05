import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

export default class InsertImage extends Plugin {
    init() {
        const editor = this.editor;
	this.isOpen = false

        editor.ui.componentFactory.add( 'insertImage', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Insertar imagen',
                icon: imageIcon,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
		this.isOpen = true
		this.log()
            } );

            return view;
        } );
    }

    log() {
	    console.log(this.isOpen)
    }
}
