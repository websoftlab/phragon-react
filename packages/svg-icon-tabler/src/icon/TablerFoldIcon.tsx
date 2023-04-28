import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFoldIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFoldIcon = React.forwardRef<SVGSVGElement, TablerFoldIconProps>(function TablerFoldIcon(props, ref) {
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
			<path d="M12 3v6l3 -3m-6 0l3 3" />
			<path d="M12 21v-6l3 3m-6 0l3 -3" />
			<path d="M4 12l1 0" />
			<path d="M9 12l1 0" />
			<path d="M14 12l1 0" />
			<path d="M19 12l1 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFoldIcon.displayName = "TablerFoldIcon";
}
