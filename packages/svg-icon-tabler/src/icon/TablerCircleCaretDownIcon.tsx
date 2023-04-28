import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleCaretDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleCaretDownIcon = React.forwardRef<SVGSVGElement, TablerCircleCaretDownIconProps>(
	function TablerCircleCaretDownIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M12 15l-4 -4h8z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleCaretDownIcon.displayName = "TablerCircleCaretDownIcon";
}
