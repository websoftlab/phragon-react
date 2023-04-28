import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBackhoeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBackhoeIcon = React.forwardRef<SVGSVGElement, TablerBackhoeIconProps>(function TablerBackhoeIcon(
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
			<path d="M4 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M13 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M13 19l-9 0" />
			<path d="M4 15l9 0" />
			<path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />
			<path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
			<path d="M21.12 9.88l-3.12 -4.88l-5 5" />
			<path d="M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBackhoeIcon.displayName = "TablerBackhoeIcon";
}
