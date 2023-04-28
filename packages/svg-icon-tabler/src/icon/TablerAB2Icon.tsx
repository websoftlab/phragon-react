import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAB2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAB2Icon = React.forwardRef<SVGSVGElement, TablerAB2IconProps>(function TablerAB2Icon(props, ref) {
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
			<path d="M16 21h3c.81 0 1.48 -.67 1.48 -1.48l.02 -.02c0 -.82 -.69 -1.5 -1.5 -1.5h-3v3z" />
			<path d="M16 15h2.5c.84 -.01 1.5 .66 1.5 1.5s-.66 1.5 -1.5 1.5h-2.5v-3z" />
			<path d="M4 9v-4c0 -1.036 .895 -2 2 -2s2 .964 2 2v4" />
			<path d="M2.99 11.98a9 9 0 0 0 9 9m9 -9a9 9 0 0 0 -9 -9" />
			<path d="M8 7h-4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAB2Icon.displayName = "TablerAB2Icon";
}
