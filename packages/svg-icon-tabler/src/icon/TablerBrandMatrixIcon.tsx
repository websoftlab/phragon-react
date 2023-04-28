import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandMatrixIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandMatrixIcon = React.forwardRef<SVGSVGElement, TablerBrandMatrixIconProps>(
	function TablerBrandMatrixIcon(props, ref) {
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
				<path d="M4 3h-1v18h1" />
				<path d="M20 21h1v-18h-1" />
				<path d="M7 9v6" />
				<path d="M12 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" />
				<path d="M17 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandMatrixIcon.displayName = "TablerBrandMatrixIcon";
}
