import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCigaretteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCigaretteIcon = React.forwardRef<SVGSVGElement, TablerCigaretteIconProps>(
	function TablerCigaretteIcon(props, ref) {
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
				<path d="M18 12H2v4h16" />
				<path d="M22 12v4" />
				<path d="M7 12v4" />
				<path d="M18 8c0-2.5-2-2.5-2-5" />
				<path d="M22 8c0-2.5-2-2.5-2-5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCigaretteIcon.displayName = "TablerCigaretteIcon";
}
