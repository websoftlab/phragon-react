import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAdjustmentsCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAdjustmentsCodeIcon = React.forwardRef<SVGSVGElement, TablerAdjustmentsCodeIconProps>(
	function TablerAdjustmentsCodeIcon(props, ref) {
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
				<path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
				<path d="M6 4v4" />
				<path d="M6 12v8" />
				<path d="M13.557 14.745a2 2 0 1 0 -1.557 3.255" />
				<path d="M12 4v10" />
				<path d="M12 18v2" />
				<path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
				<path d="M18 4v1" />
				<path d="M18 9v4" />
				<path d="M20 21l2 -2l-2 -2" />
				<path d="M17 17l-2 2l2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAdjustmentsCodeIcon.displayName = "TablerAdjustmentsCodeIcon";
}
