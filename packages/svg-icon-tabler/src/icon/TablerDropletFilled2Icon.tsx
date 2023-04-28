import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDropletFilled2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDropletFilled2Icon = React.forwardRef<SVGSVGElement, TablerDropletFilled2IconProps>(
	function TablerDropletFilled2Icon(props, ref) {
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
				<path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
				<path d="M6 14h12" />
				<path d="M7.305 17.695l3.695 -3.695" />
				<path d="M10.26 19.74l5.74 -5.74l-5.74 5.74z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDropletFilled2Icon.displayName = "TablerDropletFilled2Icon";
}
