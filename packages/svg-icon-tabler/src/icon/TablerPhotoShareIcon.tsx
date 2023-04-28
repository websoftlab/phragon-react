import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPhotoShareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPhotoShareIcon = React.forwardRef<SVGSVGElement, TablerPhotoShareIconProps>(
	function TablerPhotoShareIcon(props, ref) {
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
				<path d="M12 21h-6a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7" />
				<path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3" />
				<path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0" />
				<path d="M16 22l5 -5" />
				<path d="M21 21.5v-4.5h-4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPhotoShareIcon.displayName = "TablerPhotoShareIcon";
}
