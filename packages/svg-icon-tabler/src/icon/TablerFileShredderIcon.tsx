import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileShredderIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileShredderIcon = React.forwardRef<SVGSVGElement, TablerFileShredderIconProps>(
	function TablerFileShredderIcon(props, ref) {
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
				<path d="M14 3v4a1 1 0 0 0 1 1h4" />
				<path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
				<path d="M3 12l18 0" />
				<path d="M6 16l0 2" />
				<path d="M10 16l0 6" />
				<path d="M14 16l0 2" />
				<path d="M18 16l0 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileShredderIcon.displayName = "TablerFileShredderIcon";
}
