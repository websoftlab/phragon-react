import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileMinusIcon = React.forwardRef<SVGSVGElement, TablerFileMinusIconProps>(
	function TablerFileMinusIcon(props, ref) {
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
				<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
				<path d="M14 2 L14 8 L20 8" />
				<path d="M9 15 L15 15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileMinusIcon.displayName = "TablerFileMinusIcon";
}
