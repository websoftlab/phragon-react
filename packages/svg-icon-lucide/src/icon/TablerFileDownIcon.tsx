import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileDownIcon = React.forwardRef<SVGSVGElement, TablerFileDownIconProps>(function TablerFileDownIcon(
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
			<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
			<path d="M14 2 L14 8 L20 8" />
			<path d="M12 18v-6" />
			<path d="m9 15 3 3 3-3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFileDownIcon.displayName = "TablerFileDownIcon";
}
