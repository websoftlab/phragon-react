import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTagIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTagIcon = React.forwardRef<SVGSVGElement, TablerTagIconProps>(function TablerTagIcon(props, ref) {
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
			<path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
			<path d="M7 7h.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTagIcon.displayName = "TablerTagIcon";
}
