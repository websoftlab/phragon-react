import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAtom2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAtom2Icon = React.forwardRef<SVGSVGElement, TablerAtom2IconProps>(function TablerAtom2Icon(
	props,
	ref
) {
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
			<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M12 21l0 .01" />
			<path d="M3 9l0 .01" />
			<path d="M21 9l0 .01" />
			<path d="M8 20.1a9 9 0 0 1 -5 -7.1" />
			<path d="M16 20.1a9 9 0 0 0 5 -7.1" />
			<path d="M6.2 5a9 9 0 0 1 11.4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAtom2Icon.displayName = "TablerAtom2Icon";
}
