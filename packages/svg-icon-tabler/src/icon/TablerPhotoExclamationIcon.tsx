import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPhotoExclamationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPhotoExclamationIcon = React.forwardRef<SVGSVGElement, TablerPhotoExclamationIconProps>(
	function TablerPhotoExclamationIcon(props, ref) {
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
				<path d="M15 21h-9a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
				<path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" />
				<path d="M14 14l1 -1c.665 -.64 1.44 -.821 2.167 -.545" />
				<path d="M19 16v3" />
				<path d="M19 22v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPhotoExclamationIcon.displayName = "TablerPhotoExclamationIcon";
}
