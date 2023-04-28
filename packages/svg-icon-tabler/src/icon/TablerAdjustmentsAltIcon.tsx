import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAdjustmentsAltIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAdjustmentsAltIcon = React.forwardRef<SVGSVGElement, TablerAdjustmentsAltIconProps>(
	function TablerAdjustmentsAltIcon(props, ref) {
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
				<path d="M4 8h4v4h-4z" />
				<path d="M6 4l0 4" />
				<path d="M6 12l0 8" />
				<path d="M10 14h4v4h-4z" />
				<path d="M12 4l0 10" />
				<path d="M12 18l0 2" />
				<path d="M16 5h4v4h-4z" />
				<path d="M18 4l0 1" />
				<path d="M18 9l0 11" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAdjustmentsAltIcon.displayName = "TablerAdjustmentsAltIcon";
}
