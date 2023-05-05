import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCigaretteOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCigaretteOffIcon = React.forwardRef<SVGSVGElement, TablerCigaretteOffIconProps>(
	function TablerCigaretteOffIcon(props, ref) {
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
				<path d="M2 2 L22 22" />
				<path d="M12 12H2v4h14" />
				<path d="M22 12v4" />
				<path d="M18 12h-.5" />
				<path d="M7 12v4" />
				<path d="M18 8c0-2.5-2-2.5-2-5" />
				<path d="M22 8c0-2.5-2-2.5-2-5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCigaretteOffIcon.displayName = "TablerCigaretteOffIcon";
}
