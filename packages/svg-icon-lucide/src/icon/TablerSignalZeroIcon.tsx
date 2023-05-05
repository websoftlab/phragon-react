import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSignalZeroIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSignalZeroIcon = React.forwardRef<SVGSVGElement, TablerSignalZeroIconProps>(
	function TablerSignalZeroIcon(props, ref) {
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
				<path d="M2 20h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSignalZeroIcon.displayName = "TablerSignalZeroIcon";
}
