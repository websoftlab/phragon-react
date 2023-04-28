import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPhotoDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPhotoDownIcon = React.forwardRef<SVGSVGElement, TablerPhotoDownIconProps>(
	function TablerPhotoDownIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M15 8h.01" />
				<path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" />
				<path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" />
				<path d="M14 14l1 -1c.653 -.629 1.413 -.815 2.13 -.559" />
				<path d="M19 16v6" />
				<path d="M22 19l-3 3l-3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPhotoDownIcon.displayName = "TablerPhotoDownIcon";
}
