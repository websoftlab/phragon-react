import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEditCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEditCircleIcon = React.forwardRef<SVGSVGElement, TablerEditCircleIconProps>(
	function TablerEditCircleIcon(props, ref) {
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
				<path d="M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z" />
				<path d="M16 5l3 3" />
				<path d="M9 7.07a7 7 0 0 0 1 13.93a7 7 0 0 0 6.929 -6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerEditCircleIcon.displayName = "TablerEditCircleIcon";
}
