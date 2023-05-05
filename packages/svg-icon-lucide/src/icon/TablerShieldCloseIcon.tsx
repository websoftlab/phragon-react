import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShieldCloseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShieldCloseIcon = React.forwardRef<SVGSVGElement, TablerShieldCloseIconProps>(
	function TablerShieldCloseIcon(props, ref) {
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
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
				<path d="M9.5 9 L14.5 14" />
				<path d="M14.5 9 L9.5 14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerShieldCloseIcon.displayName = "TablerShieldCloseIcon";
}
