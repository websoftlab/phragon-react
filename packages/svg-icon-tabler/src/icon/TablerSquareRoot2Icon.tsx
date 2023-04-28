import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareRoot2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareRoot2Icon = React.forwardRef<SVGSVGElement, TablerSquareRoot2IconProps>(
	function TablerSquareRoot2Icon(props, ref) {
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
				<path d="M13 12h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1" />
				<path d="M12 19c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
				<path d="M3 12h1l3 8l3 -16h10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareRoot2Icon.displayName = "TablerSquareRoot2Icon";
}
