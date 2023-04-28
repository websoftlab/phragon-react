import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlayerPlayIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlayerPlayIcon = React.forwardRef<SVGSVGElement, TablerPlayerPlayIconProps>(
	function TablerPlayerPlayIcon(props, ref) {
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
				<path d="M7 4v16l13 -8z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlayerPlayIcon.displayName = "TablerPlayerPlayIcon";
}
