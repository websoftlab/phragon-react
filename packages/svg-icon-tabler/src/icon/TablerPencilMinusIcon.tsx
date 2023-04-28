import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPencilMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPencilMinusIcon = React.forwardRef<SVGSVGElement, TablerPencilMinusIconProps>(
	function TablerPencilMinusIcon(props, ref) {
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
				<path d="M8 20l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4h4z" />
				<path d="M13.5 6.5l4 4" />
				<path d="M16 18h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPencilMinusIcon.displayName = "TablerPencilMinusIcon";
}
