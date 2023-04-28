import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorldSearchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorldSearchIcon = React.forwardRef<SVGSVGElement, TablerWorldSearchIconProps>(
	function TablerWorldSearchIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 0 -9 9" />
				<path d="M3.6 9h16.8" />
				<path d="M3.6 15h7.9" />
				<path d="M11.5 3a17 17 0 0 0 0 18" />
				<path d="M12.5 3a16.984 16.984 0 0 1 2.574 8.62" />
				<path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M20.2 20.2l1.8 1.8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWorldSearchIcon.displayName = "TablerWorldSearchIcon";
}
